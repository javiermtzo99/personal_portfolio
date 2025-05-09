import React, { useState, useEffect, useRef } from 'react';

interface ModalData {
  title: string;
  bodyHtml: string;
  iconClass: string;
  type: 'project' | 'education' | 'work' | 'about';
}

type CardType = 'project' | 'education' | 'work' | 'about';

interface Config {
  sel: string;
  titleSel: string;
  iconFromImg: boolean;
  iconFromIcon?: boolean;
  type: CardType;
}

const ModalContent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [data, setData] = useState<ModalData>({
    title: '',
    bodyHtml: '',
    iconClass: '',
    type: 'about'
  });
  
  // Reference to the modal overlay element
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // define which card‐selectors to listen on, and how to pull title/icon
    const configs: Config[] = [
      { sel: '.timeline-card', titleSel: 'h3', iconFromImg: true, type: 'work' },
      { sel: '.project-content-card', titleSel: 'h3', iconFromImg: true, type: 'project' },
      { sel: '.about-content-card',  titleSel: 'h4', iconFromImg: false, iconFromIcon: true, type: 'about' }
    ];

    const cleanups = configs.flatMap(cfg => {
      const nodes = Array.from(document.querySelectorAll(cfg.sel));
      return nodes.map(node => {
        const onClick = () => {
          const title = node.querySelector(cfg.titleSel)?.textContent ?? '';
          const hidden = node.querySelector('.hidden-content') as HTMLElement;
          const body = hidden?.innerHTML ?? '';
          let iconClass = '';
          if (cfg.iconFromIcon) {
            iconClass = node.querySelector('i')?.className ?? '';
          } else if (cfg.iconFromImg) {
            iconClass = (node.querySelector('img') as HTMLImageElement)?.src ?? '';
          }
          setData({ title, bodyHtml: body, iconClass, type: cfg.type });
          setOpen(true);
        };
        node.addEventListener('click', onClick);
        return () => node.removeEventListener('click', onClick);
      });
    });

    // clicking the backdrop closes
    const onBackdrop = (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === 'modal-root') {
        closeModal();
      }
    };
    document.addEventListener('click', onBackdrop);

    // cleanup on unmount
    return () => {
      cleanups.forEach(fn => fn());
      document.removeEventListener('click', onBackdrop);
    };
  }, []);

  // escape key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  
  // Handle closing animation
  const closeModal = () => {
    if (isClosing) return; // Prevent multiple close calls
    
    setIsClosing(true);
    
    // Add closing animation classes
    if (modalRef.current) {
      modalRef.current.style.animation = 'fadeOut 0.3s ease-out forwards';
      const modalElement = modalRef.current.querySelector('.modal') as HTMLElement;
      if (modalElement) {
        modalElement.style.animation = 'scaleOut 0.3s ease-out forwards';
      }
    }
    
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  if (!open) return null;

  return (
    <div 
      id="modal-root" 
      className={`modal-overlay ${isClosing ? 'closing' : ''}`} 
      ref={modalRef}
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modal-root') {
          closeModal();
        }
      }}>
      <div className="modal">
        <div className="modal-header" data-type={data.type}>
          <div className="header-left">
            {data.type !== 'project' && (
              <div className="card-icon">
                {data.iconClass.startsWith('http') ? (
                  <img src={data.iconClass} alt="Icon" />
                ) : (
                  <i className={data.iconClass}></i>
                )}
              </div>
            )}
            <h2>{data.title}</h2>
          </div>
          <button className="close-button" onClick={closeModal}>&times;</button>
        </div>
        <div className="individual-content" data-type={data.type} dangerouslySetInnerHTML={{ __html: data.bodyHtml }} />
      </div>
    </div>
  );
};

export default ModalContent;