<script>

    import TopSofC from "../lib/TopSofC.svelte";
    import Bar from "../lib/Bar.svelte";
    import "../assets/global-styles.css";
    import moon from '../assets/moon.svg';
    import sofcLongCity from '../assets/sofc-long-city.svg';
    import clockAM from '../assets/clock-am.svg';
    import clockPM from '../assets/clock-pm.svg';
    
</script>

<TopSofC/>

<main>
    <div class="title">
        <div class="title-columns">
            <div class="left-title">
                <h1>Transportation Justice for Night and Evening Shift Workers in Canada</h1>
                <p><a href="https://planning.unc.edu/faculty/palm/">Matthew Palm</a> & <a href="https://jamaps.github.io">Jeff Allen</a></p>
                <p>October 2023</p>
            </div>
            <div class="right-title">
                <img width=100 height=100 src={moon} alt="moon">
            </div>
        </div>
        <img width=100% height=71 src={sofcLongCity} alt="sofcLongCity">
    </div>
    
    <div class="text">
        
        <p>
            Night and evening shift workers play pivotal roles in our economy, keeping the lights on in sectors like healthcare, emergency services, public safety, logistics, and infrastructure. Yet, a gap exists in the research dedicated to understanding their transportation needs from a justice standpoint. Our <a href="https://doi.org/10.1016/j.trd.2023.103875">recent study</a> seeks to bridge this discrepancy. 
        </p>

        <h2>Why is Transportation Justice Important for Shift Workers?</h2>
        
        <p>
            <span class="bold">1) Safety:</span> Shift workers face higher chances of <a href="https://doi.org/10.1016/S0001-4575(02)00007-6">vehicle collisions</a>. Offering them alternative commuting options can potentially reduce the number of road injuries or fatalities, reinforcing public health efforts. 
        </p>
        <p>  
            <span class="bold">2) Health & Social Integration:</span> Shift work is linked with adverse <a href="https://doi.org/10.1136/bmj.i5210">physical</a> and <a href="https://link.springer.com/article/10.1007/s00420-019-01434-3">mental health</a> consequences and heightened feelings of <a href="https://link.springer.com/article/10.1007/s40675-018-0114-7">social isolation</a>. Enhancing these workers’ access to social and economic opportunities can help address these issues.
        </p> 
        <p>
            <span class="bold">3) Equity and Representation:</span> Global research hints at a trend where shift workers disproportionately belong to equity-deserving communities. Our study is among the first to systematically document this in Canada.
        </p>

        <h2>Understanding Shifts?</h2>

        <p>
            
            The Canadian General Social Survey's <a href="https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&SDDS=4503">Time Use</a> wave asks whether people work day, evening, or night shifts as well as their work arrival time. We use these two data points to create a classification of shifts based on work arrival times.
        </p> 
       
        <img width=150 height=150 src={clockAM} alt="clockAM" style="margin-right: 30px;">
        <img width=150 height=150 src={clockPM} alt="clockPM">
        <p> 
            <svg width="12" height="12">
                <rect width="12" height="12" fill="#0D534D" />
            </svg>   
            Day shifts arrive between 4am and noon
        </p> 
        <p>
            <svg width="12" height="12">
                <rect width="12" height="12" fill="#6FC7EA" />
            </svg>   
            Evening shifts arrive between noon and 7:30pm
        </p> 
        <p>    
            <svg width="12" height="12">
                <rect width="12" height="12" fill="#F1C500" />
            </svg>   
            Night shifts arrive between 7:30pm and 4am
        </p> 


        <h2>Demographics of Shift Workers</h2>

        <p>
            We then sought out to analyze how working evening and night shifts varies among different demographic groups. 
            The General Social Survey is a relatively small sample, so we decided to use the Canadian long-form census, a 25% sample of all Canadians. We are able to identify night and evening shift workers in the 2016 Canadian Census using self-reported arrival time and the classification described above. Our findings show that slightly less than 10% of Canadians were engaged in night or evening shifts, but this varies substantially for different demographic groups.
        </p>
        <Bar variable="Overall"/>
        <p>
            <span class="bold">_ Income & Employment Patterns:</span> Night and evening shift workers often have lower incomes in Canada. Similar trends have been noted in the United States and the United Kingdom.
        </p>
        <Bar variable="Low-Income Status"/>
        <p>
            <span class="bold">_ Ethnic & Indigenous Representation:</span> Black, Filipino, South Asian, and Indigenous individuals are notably more inclined towards night and evening shifts.
        </p>
        <Bar variable="Visible Minority"/>
        <p>
            <span class="bold">_ Immigrant Workers:</span> Newer immigrants have a higher propensity for these shifts as well. Over time, their work patterns begin to mirror that of people born in Canada. 
        </p>
        <Bar variable="Immigrants"/>
        <p>
            <span class="bold">_ Sectors of Employment:</span> Evening workers are overrepresented in sales, services, arts, culture, manufacturing, and utilities, while night shift workers are more concentrated in vital areas like health and manufacturing or utilities. 
        </p>
        <Bar variable="Employment Sector"/>

        <h2>Mapping the Geography of Shift Workers</h2>

        <p>
            The Canadian Census offers commuting data by time of day at the Dissemination Area (i.e. small neighbourhood) level. However, in this data the entire off-peak is lumped into one period: people who arrived at work between noon and 4am. We plot the share of people who commute at these times as a percent of all out-of-home commuters in the following figures. The first shows high concentrations of shift workers living in southeast Vancouver, as well as the suburbs of Surrey and Langley. 
        </p>

    </div>

    <div class="map">
        <img src="./evening-and-night-commuting/map-vancouver.png" alt="Map of Vancouver showing % of commuters that arrive between noon and 4am">
        <p>Click <a href="./evening-and-night-commuting/map-vancouver.png">here</a> to view a high-resolution version of this map</p>
    </div>

    <div class="text">

        <p>
            In Montreal, shift workers are more prevalent in the north of island and in the suburb of Longueuil.  Additionally, neighbourhoods on the very south end of Montreal, such as LaSalle, are home to relatively higher concentrations of shift workers.
        </p>

    </div>

    <div class="map">
        <img src="./evening-and-night-commuting/map-montreal.png" alt="Map of Montreal showing % of commuters that arrive between noon and 4am">
        <p>Click <a href="./evening-and-night-commuting/map-montreal.png">here</a> to view a high-resolution version of this map</p>
    </div>

    <div class="text">

        <p>
            Shift workers are more likely to live in suburban areas of the Greater Toronto Area, specifically Scarborough in the east, and Brampton and northern Etobicoke to the west. The latter concentrations are clustered near Toronto Pearson International Airport, which employs a significant number of shift workers and supports night-shift heavy employment in warehousing and logistics.
        </p>

    </div>

    <div class="map">
        <img src="./evening-and-night-commuting/map-toronto.png" alt="Map of Toronto showing % of commuters that arrive between noon and 4am">
        <p>Click <a href="./evening-and-night-commuting/map-toronto.png">here</a> to view a high-resolution version of this map</p>
    </div>



    
    
    <div class="text">

        <h2>Conclusions</h2>

        <p>
            Night and evening shift workers, often from equity-deserving communities, are the backbone of many essential services in Canada. 
        </p>
        <p>
            Now is a good time to advance these conversations, as transit agencies across North America are recognizing the value of providing <a href="https://www.governing.com/transportation/transit-agencies-rethink-schedules-for-fewer-commuters">off-peak service</a> to an off-peak ridership that has recovered faster than peak hour ridership. Further, <a href="https://doi.org/10.1016/j.jtrangeo.2017.08.010">research</a> suggests that many nighttime travelers make trips that could be done on foot or bicycle, if only better street lighting and pedestrian infrastructure were available.
        </p>
        <p>
            Addressing the unique needs and challenges of shift workers and other nighttime travelers can pave the way for a more sustainable, equitable, and safe future for all.
        </p>
    </div>

</main>

