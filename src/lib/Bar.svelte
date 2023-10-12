<script>

    import data from "../assets/data.json";

    export let variable;

    let filteredData = data.filter((item) => item.title === variable)[0];

    let width;
    let maxPercent = 23;

    function roundToDecimal(number) {
        return Math.round(number * 10) / 10;
    }
    
    

</script>


<div class="bar" bind:clientWidth={width}>


    <svg width="100%" height="7">
        <!-- <text x="0" y="14" font-size="18" fill="#8DBF2E">{filteredData.title}</text> -->
        <line id="borderline" x1="0" y1="2" x2="{width}" y2="2"></line>
    </svg>

    {#each filteredData.data as item}
        
        <svg width="100%" height="45">
            
            <text x="0" y="13" font-size="14" fill="white">{item.Name}</text>

            <rect id="eveningbar" width="{(item.Evening / maxPercent) * width}" height="20" x="0" y ="20"/>
            <rect id="nightbar" width="{(item.Night / maxPercent) * width}" height="20" x="{(item.Evening / maxPercent) * width}" y ="20"/>
            <rect id="bardivider" width="2" height="20" x="{(item.Evening / maxPercent) * width - 1}" y ="20"/>

            <text x="5" y="35" font-size="14" fill="black">{roundToDecimal(item.Evening)}%</text>
            <text x="{(item.Evening / maxPercent) * width + 5}" y="35" font-size="14" fill="black">{roundToDecimal(item.Night)}%</text>

        </svg>

    {/each}

    <svg width="100%" height="105">
        <line id="xaxis" x1="0" y1="1" x2="{width}"  y2="1"></line>

        <line id="xaxis" x1="1" y1="1" x2="1"  y2="8"></line>
        <line id="xaxis" x1="{width - 1}" y1="1" x2="{width - 1}"  y2="8"></line>
        <line id="xaxis" x1="{width * 0.25}" y1="1" x2="{width * 0.25}"  y2="8"></line>
        <line id="xaxis" x1="{width * 0.5}" y1="1" x2="{width * 0.5}"  y2="8"></line>
        <line id="xaxis" x1="{width * 0.75}" y1="1" x2="{width * 0.75}"  y2="8"></line>

        <text x="0" y="21" font-size="14" fill="#D0D1C9" text-anchor="left">0%</text>
        <text x="{width * 0.25}" y="21" font-size="14" fill="#D0D1C9" text-anchor="middle">5%</text>
        <text x="{width * 0.5}" y="21" font-size="14" fill="#D0D1C9" text-anchor="middle">10%</text>
        <text x="{width * 0.75}" y="21" font-size="14" fill="#D0D1C9" text-anchor="middle">15%</text>
        <text x="{width}" y="21" font-size="14" fill="#D0D1C9" text-anchor="end">20%</text>

        <text x="{width / 2}" y="40" font-size="14" fill="#D0D1C9" text-anchor="middle">Percent of all journey-to-work trips</text>

        <rect id="eveningbar" width="10" height="20" x="0" y ="45"/>
        <text x="15" y="60" font-size="14" fill="#D0D1C9" text-anchor="left">Evening Trips</text>

        <rect id="nightbar" width="10" height="20" x="110" y ="45"/>
        <text x="125" y="60" font-size="14" fill="#D0D1C9" text-anchor="left">Night Trips</text>

    </svg>

</div>


<style>

    .bar {
        max-width: 750px;
        width: 100%;
        min-height: 20px;
        background-color: none;
        margin: 0px;
        padding: 0px;
        margin-bottom: 5px;
    }
    #eveningbar {
        fill: var(--brandLightBlue);
    }
    #nightbar {
        fill: var(--brandYellow);
    }
    #bardivider {
        fill: var(--brandWhite);
    }
    #borderline {
        stroke: var(--brandPink);
        stroke-width:1
    }
    #xaxis {
        stroke: var(--brandGray);
        stroke-width:1
    }

</style>