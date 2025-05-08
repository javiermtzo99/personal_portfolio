---
company: "Kuona"
position: "Data Engineer"
period: "June 2022 - August 2024"
type: "Full time"
logo: "/kuona.svg"
order: 2
---

Kuona is a Software as a Service platform utilizing deep learning techniques to optimize product pricing, promotions, and inventory management for multinational companies in the USA, Latin America and Europe. During my tenure here, I contributed to the following projects:

**Promotions.** Solutions for analyzing promotion outcomes (post-mortem) and predicting future promotional performance.
- Participated in migrating ETL processes from PostgreSQL and Django commands on Lambda to a Data Warehouse architecture using Glue Catalog, Spark jobs and a Medallion architecture with S3 buckets (bronze, silver, gold), orchestrated via Airflow. This migration improved execution time by up to 70% and reduced costs by approximately 30%.
- Built exploratory data analysis dashboards using QuickSight and Grafana, querying data directly from our S3 buckets to identify sales increases and cost-of-goods reductions. This initiative eliminated the need for bi-weekly meetings dedicated specifically to this analysis.
- Initiated an internal automated testing project focused on enforcing client-specific data contracts, data type requirements, and business rules during data ingestion. The system generated automated violation reports sent directly to stakeholders.
- Implemented algorithms to calculate promotion KPIs and trained neural networks using cloud services such as Lambda and EC2 instances.
- Responsible for creating, monitoring, and reporting on data pipelines and insights across various client projects.

**Pricing.** Solution to evaluate price elasticity based on metrics including cost of goods, competitor pricing and regional factors.
- Played a key role in onboarding the first client onto this solution, overseeing data integration, designing data models, and implementing monitoring and business rule enforcement.
- Designed, orchestrated and maintained ETL pipelines for ingesting data and running customized deep learning algorithms.
- Delivered in-person client presentations explaining the solution, its functionalities and the data requirements necessary for optimal workflow.

**Perfect Order.** Solution for inventory flow for specific location according to the predicted demand.
- Collaborated closely with Machine Learning Engineers to create tailored feature engineering solutions per client and automated their integration within the company's deep learning framework.

Tech stack used: SQL, Python, Django, Kafka, Spark, Airflow, AWS (Lambda, S3, Glue, Athena, EC2), PyTorch, PostgreSQL, Redshift.
