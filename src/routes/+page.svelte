<script>

    import TopSofC from "../lib/TopSofC.svelte";
    import Bar from "../lib/Bar.svelte";
    import "../assets/global-styles.css";
    import moon from '../lib/moon.svg';
    
</script>

<TopSofC/>

<main>
    <div class="title">
        <div class="left-title">
            <h1>Transportation Justice for Night and Evening Shift Workers in Canada</h1>
            <p>Matt Palm & Jeff Allen</p>
            <p>October 2023</p>
        </div>
        <div class="right-title">
            <img width=100 height=100 src={moon} alt="moon">
        </div>
    </div>
    <div class="text">
        <p>
            Night and evening shift workers play pivotal roles in our economy, keeping the lights on in sectors like healthcare, emergency services, public safety, logistics, and infrastructure. Yet, a gap exists in the research dedicated to understanding their transportation needs from a justice standpoint. Our latest <a href="https://doi.org/10.1016/j.trd.2023.103875">study</a> seeks to bridge this discrepancy. 
        </p>

        <h2>Why is Transportation Justice Important for Shift Workers?</h2>
        
        <p>
            <span class="bold">1) Safety:</span> Shift workers face higher chances of vehicle accidents. Offering them alternative commuting options can potentially reduce the number of road injuries or fatalities, reinforcing public health efforts. 
        </p>
        <p>  
            <span class="bold">2) Health & Social Integration:</span> Shift work is linked with adverse physical and mental health consequences and heightened feelings of social isolation. Enhancing these workers’ access to social and economic opportunities can help address these issues.
        </p> 
        <p>
            <span class="bold">3) Equity and Representation:</span> Global research hints at a trend where shift workers disproportionately belong to equity-deserving communities. Our study is among the first to systematically document this in Canada.
        </p>

        <h2>Understanding Shifts?</h2>

        <p>
            Deciphering who exactly works shifts can be tricky, mainly because primary data sources, like the long-form Census, lack standard questions about workers' schedules. We overcame this limitation by cross-referencing with the Canadian General Social Survey's Time Use wave. This approach helped us categorize workers into three shifts based on their work arrival time:
        </p> 
        <p>
                <li>
                    Day (4 am - noon)
                </li> 
                <li>
                    Evening (noon - 7:30 pm)
                </li> 
                <li>
                    Night (7:30 pm - 4 am).
                </li>
        </p>


        <h2>Demographics of Shift Workers</h2>

        <p>
            Our findings suggest that fewer than 10% of Canadians were engaged in night or evening shifts at the census time. 
        </p>
        <Bar variable="Overall"/>
        <p>
            <span class="bold">Income & Employment Patterns:</span> Night and evening shift workers, like their counterparts in the UK and US, often have lower incomes in Canada. This trend persists even after statistical adjustments. 
        </p>
        <Bar variable="Low-Income Status"/>
        <p>
            <span class="bold">Ethnic & Indigenous Representation:</span> Black, Filipino, South Asian, and Indigenous individuals are notably more inclined towards night and evening shifts, as visualized in our data charts. 
        </p>
        <Bar variable="Visible Minority"/>
        <p>
            <span class="bold">Immigrant Workers:</span> Newer immigrants have a higher propensity for these shifts. Over time, their work patterns begin to mirror that of people born in Canada. 
        </p>
        <Bar variable="Immigrants"/>
        <p>
            <span class="bold">Sectors of Employment:</span> Evening workers are overrepresented in sales, services, arts, culture, manufacturing, and utilities, while night shift workers are more concentrated in vital areas like health and manufacturing or utilities. 
        </p>
        <Bar variable="Employment Sector"/>
    </div>

</main>

