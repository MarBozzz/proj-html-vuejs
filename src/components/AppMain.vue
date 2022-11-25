<script>

import ToolsSection from './mainComponents/ToolsSection.vue';
import MissionsSection from './mainComponents/MissionsSection.vue';
import PastProjectsSection from './mainComponents/PastProjectsSection.vue';
import StatsSection from './mainComponents/StatsSection.vue';
import PackagesSection from './mainComponents/PackagesSection.vue';
import FeedbackSection from './mainComponents/FeedbackSection.vue';
import NewsBlogSection from './mainComponents/NewsBlogSection.vue';
import CallToActionSection from './mainComponents/CallToActionSection.vue';
import OurPartnersSection from './mainComponents/OurPartnersSection.vue';

export default {
  name : 'AppMain',
  components : {
    ToolsSection,
    MissionsSection,
    PastProjectsSection,
    StatsSection,
    PackagesSection,
    FeedbackSection,
    NewsBlogSection,
    CallToActionSection,
    OurPartnersSection
  }
}
</script>


<template>
  <main>
    <ToolsSection />
    <MissionsSection />
    <PastProjectsSection />
    <StatsSection />
    <PackagesSection />
    <FeedbackSection />
    <NewsBlogSection />
    <CallToActionSection />
    <OurPartnersSection />
  </main>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixins' as *;

main {
  background-color: darkslategrey;
}

</style>