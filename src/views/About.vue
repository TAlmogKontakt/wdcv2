<template>
  <div ref="input" id="vizContainer" style="width: 1000px; height: 827px">
    <!-- <object class="tableauViz" width="1000" height="827" style="display: none">
      <param
        name="host_url"
        value="https%3A%2F%2Fprod-useast-b.online.tableau.com%2F"
      />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value="&#47;t&#47;kontaktio" />
      <param name="name" value="NewBest&#47;Dashboard1" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="yes" />
      <param name="showAppBanner" value="false" />
    </object> -->
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {


    var containerDiv = this.$refs.input,
    url =
      "https://prod-useast-b.online.tableau.com/t/kontaktio/views/NewBest/Dashboard1",
    options = {
      hideTabs: true,
      onFirstInteractive: function () {
          console.log("Run this code when the viz has finished loading.");
        }
    };

  var viz = new tableau.Viz(containerDiv, url, options);
  console.log(viz);
  },
};
//

// viz = new tableau.Viz(containerDiv, url, options);
// function initViz() {
//   var containerDiv = document.getElementById("vizContainer"),
//     url =
//       "https://prod-useast-b.online.tableau.com/t/kontaktio/views/NewBest/Dashboard1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
//     options = {
//       hideTabs: true,
//     };

//   viz = new tableau.Viz(containerDiv, url, options);
// }
// initViz();
// var viz;

// function initViz() {
//     var containerDiv = document.getElementById("vizContainer"),
//         url = "http://public.tableau.com/views/RegionalSampleWorkbook/College",
//         options = {
//             "Academic Year": "",
//             hideTabs: true
//         };

//     viz = new tableau.Viz(containerDiv, url, options);
// }

// function yearFilter(year) {
//     var sheet = viz.getWorkbook().getActiveSheet();
//     if (year === "") {
//         sheet.clearFilterAsync("Academic Year");
//     } else {
//         sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
//     }
// }
</script>