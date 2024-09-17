<!-- App.vue -->
<template>
  <div id="fswaitlayer" class="fa fa-spinner fa-spin"></div>
  <div class="pt-page pt-page-current pt-page-controller search-pager">
    <PageHeader ref="pageHeader" :labels="labels" pid="vfte012" version="1.0.0" showLanguage="true" @language-changed="changeLanguage" />
    <div id="entrylayer" class="entry-layer">
      <div id="entrylayerarea" class="portal-area sub-entry-layer">
        <EntryForm ref="entryForm" :labels="labels" @data-updated="dataUpdated" />
      </div>
    </div>
  </div>
</template>
<style>
#entrylayerarea { padding-left:5px; }
</style>
<script>
import { ref } from 'vue';
import { PageHeader } from '@willsofts/will-control';
import EntryForm from '@/components/EntryForm.vue';
import { getLabelModel } from "@willsofts/will-app";
import { getDefaultLanguage, setDefaultLanguage } from "@willsofts/will-app";
import { startApplication } from "@willsofts/will-app";

export default {
  components: {
    PageHeader, EntryForm
  },
  setup() {
    let labels = ref(getLabelModel());
    return { labels};
  },
  mounted() {
    console.log("App: mounted ...");
    this.$nextTick(() => {
      //ensure ui completed then invoke startApplication 
      startApplication("vfte012",(data) => {
        this.messagingHandler(data);
        this.$refs.pageHeader.changeLanguage(getDefaultLanguage());
      });
      //try to find out parameters from url
      const searchParams = new URLSearchParams(window.location.href);
      console.log("param: authtoken=",searchParams.get("authtoken"),", language=",searchParams.get("language"));      
    });
  },
  methods: {
    messagingHandler(data) {
      console.log("messagingHandler: data",data); 
    },
    changeLanguage(lang) {
      setDefaultLanguage(lang);
      let labelModel = getLabelModel(lang);
      this.labels = labelModel;
    },
    dataUpdated(data,response) {
      //listen action from entry form when after updated
      console.log("App: record updated");
      console.log("data",data,"response",response);
    },
  }
};
</script>