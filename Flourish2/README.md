# Flourish 2

## Description

This visualization shows the distribution of offense categories in Seattle from 2008 to the present, using the NIBRS Offense Code Description field recorded in each police report.
The data is collected by the Seattle Police Department and updated daily.
While the dataset also includes broader fields such as offense category and subcategory, this field was chosen because it provides more detailed classifications of incidents.

Source: [Seattle Open Data](https://data.seattle.gov/Public-Safety/SPD-Crime-Data-2008-Present/tazs-3rd5/about_data)

## Graph 

<img width="1150" height="882" alt="Flourish 2" src="https://github.com/user-attachments/assets/ee507aa3-b9e5-4d37-89e3-c67e29505bf3" />

Published on: [Flourish](https://public.flourish.studio/visualisation/28624667/)

## Analysis

The bar chart is effective for comparing how frequently different types of crimes are recorded.
By focusing on the top 10 categories, the visualization makes it easy to identify important patterns in the dataset. 
Colors were also chosen to differentiate broader categories. 
Blues encompass theft/larceny (lighter for vehicle related and darker for larceny), teal for property crimes, purple for personal crimes. 
Gray was used to show unclassified crimes, a muted choice meant to demonstrate gaps or limitations. 
One clear trend is that theft-related offense (theft from motor vehicles, burglary, and larceny) make up a large portion of reported incidents.

At the same time, the visualization reveals a key weakness in the dataset itself. The categories “All Other Offenses” and “Not Reportable to NIBRS” are both large and nonspecific, with “All Other Offenses” being the second largest category at nearly 191K incidents. 
These broad groupings combine many different types of incidents without clear classifications, which limits the dataset’s usefulness for further analysis. 
This raises important questions about both the quality of the data and how effective it is.

- What specific incidents are included in these broad categories? How is it decided?
- Why are they not separated into more precise groups? 
- How much important detail is being lost by combining them? 

Because a significant portion of the data lack detail, it is not possible to fully understand what kinds of crimes they include or to further analyze trends within them. 
Overall the dataset could be useful for identifying broad patterns, but less effective in making exact comparisons. 
