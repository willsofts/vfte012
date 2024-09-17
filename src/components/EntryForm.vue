<template>
	<table  class="partition-table"><tr><td class="partition-head-column"><label id="mailinfo_label" class="control-label">{{ labels.mailinfo_label }}</label></td><td class="partition-label-column"><a href="javascript:void(0);" @click.prevent="toggleCollapseExpand($event)" class="pull-right part-linker" tabIndex="-1"><i class="fa fa-chevron-circle-up fa-partition-toggle"></i></a></td></tr></table>
	<div class="row row-height">
		<div class="col-height col-md-5">
      <label for="mailserver" id="mailserver_label" class="control-label">{{ labels.mailserver_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailserver.$error}">
        <input type="text" ref="mailserver" id="mailserver" name="mailserver" class="form-control input-md" v-model="localData.mailserver" maxlength="100" />
      </div>
      <span v-if="v$.mailserver.$error" class="has-error">{{ v$.mailserver.$errors[0].$message }}</span>
    </div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-3">
      <label for="mailport" id="mailport_label" class="control-label">{{ labels.mailport_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailport.$error}">
        <input type="text" ref="mailport" id="mailport" name="mailport" class="form-control input-md" v-model="localData.mailport" maxlength="10" />
      </div>
      <span v-if="v$.mailport.$error" class="has-error">{{ v$.mailport.$errors[0].$message }}</span>
		</div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="mailuser" id="mailuser_label" class="control-label">{{ labels.mailuser_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailuser.$error}">
        <input type="text" ref="mailuser" id="mailuser" name="mailuser" class="form-control input-md" v-model="localData.mailuser" maxlength="30" />
      </div>
      <span v-if="v$.mailuser.$error" class="has-error">{{ v$.mailuser.$errors[0].$message }}</span>
		</div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="mailpassword" id="mailpassword_label" class="control-label">{{ labels.mailpassword_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailpassword.$error}">
        <input type="text" ref="mailpassword" id="mailpassword" name="mailpassword" class="form-control input-md" v-model="localData.mailpassword" maxlength="30" />
      </div>
      <span v-if="v$.mailpassword.$error" class="has-error">{{ v$.mailpassword.$errors[0].$message }}</span>
		</div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="mailfrom" id="mailfrom_label" class="control-label">{{ labels.mailfrom_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailfrom.$error}">
        <input type="text" ref="mailfrom" id="mailfrom" name="mailfrom" class="form-control input-md" v-model="localData.mailfrom" maxlength="100" />
      </div>
      <span v-if="v$.mailfrom.$error" class="has-error">{{ v$.mailfrom.$errors[0].$message }}</span>
		</div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="mailtitle" id="mailtitle_label" class="control-label">{{ labels.mailtitle_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailtitle.$error}">
        <input type="text" ref="mailtitle" id="mailtitle" name="mailtitle" class="form-control input-md irequired" v-model="localData.mailtitle" maxlength="100" />
      </div>
      <span v-if="v$.mailtitle.$error" class="has-error">{{ v$.mailtitle.$errors[0].$message }}</span>
		</div>
	</div>

	<table  class="partition-table"><tr><td class="partition-head-column">{{ labels.errormail_label }}</td><td class="partition-label-column"><a href="javascript:void(0);" @click="toggleCollapseExpand($event)" class="pull-right part-linker" tabIndex="-1"><i class="fa fa-chevron-circle-up fa-partition-toggle"></i></a></td></tr></table>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="mailto" id="mailto_label" class="control-label">{{ labels.mailto_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.mailto.$error}">
        <input type="text" ref="mailto" id="mailto" name="mailto" class="form-control input-md" v-model="localData.mailto" maxlength="100" />
      </div>
      <span v-if="v$.mailto.$error" class="has-error">{{ v$.mailto.$errors[0].$message }}</span>
		</div>
	</div>

	<table  class="partition-table"><tr><td class="partition-head-column">{{ labels.factorsetting_label }}</td><td class="partition-label-column"><a href="javascript:void(0);" @click="toggleCollapseExpand($event)" class="pull-right part-linker" tabIndex="-1"><i class="fa fa-chevron-circle-up fa-partition-toggle"></i></a></td></tr></table>
	<div class="row row-height">
    <div class="col-height col-md-10 radio my-radio form-check">
      <table><tr><td>
        <input type="checkbox" class="form-control input-md" id="factorverify" name="factorverify" :true-value="true" :false-value="false" v-model="localData.factorverify" />
      </td><td valign="middle">
        <label class="lclass control-label" id="factorverify_label" for="factorverify">{{ labels.factorverify_label }}</label>
      </td></tr></table>						
    </div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-5">
      <label for="factorissuer" id="factorissuer_label" class="control-label">{{ labels.factorissuer_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.factorissuer.$error}">
        <input type="text" ref="factorissuer" id="factorissuer" name="factorissuer" class="form-control input-md" v-model="localData.factorissuer" maxlength="100" />
      </div>
      <span v-if="v$.factorissuer.$error" class="has-error">{{ v$.factorissuer.$errors[0].$message }}</span>
		</div>
	</div>

	<table  class="partition-table"><tr><td class="partition-head-column">{{ labels.othersetting_label }}</td><td class="partition-label-column"><a href="javascript:void(0);" @click="toggleCollapseExpand($event)" class="pull-right part-linker" tabIndex="-1"><i class="fa fa-chevron-circle-up fa-partition-toggle"></i></a></td></tr></table>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="approveurl" id="approveurl_label" class="control-label">{{ labels.approveurl_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.approveurl.$error}">
        <input type="text" ref="approveurl" id="approveurl" name="approveurl" class="form-control input-md" v-model="localData.approveurl" maxlength="150" />
      </div>
      <span v-if="v$.approveurl.$error" class="has-error">{{ v$.approveurl.$errors[0].$message }}</span>
		</div>
	</div>
	<div class="row row-height">
		<div class="col-height col-md-10">
      <label for="activateurl" id="activateurl_label" class="control-label">{{ labels.activateurl_label }}</label>
      <div class="input-group has-validation" :class="{'has-error': v$.activateurl.$error}">
        <input type="text" ref="activateurl" id="activateurl" name="activateurl" class="form-control input-md" v-model="localData.activateurl" maxlength="150" />
      </div>
      <span v-if="v$.activateurl.$error" class="has-error">{{ v$.activateurl.$errors[0].$message }}</span>
		</div>
	</div>
  <div class="row row-height">
    <div id="fs_controlbuttonfooterlayer" class="col-md-12 pull-right text-right">
      <button class="btn btn-dark btn-sm" @click="updateClick"><em class="fa fa-save fa-btn-icon"></em>{{ labels.update_button }}</button>
    </div>
  </div>
</template>
<style>
#fs_controlbuttonfooterlayer { margin-right: 20px; margin-bottom:5px; margin-top: 10px; }
#fs_controlbuttonfooterlayer button { margin-right: 5px; }
</style>
<script>
import { ref, computed, watch } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import $ from "jquery";
import { DEFAULT_CONTENT_TYPE, getApiUrl }  from '@willsofts/will-app';
import { startWaiting, stopWaiting, submitFailure, detectErrorResponse }  from '@willsofts/will-app';
import { confirmUpdate, successbox, serializeParameters } from '@willsofts/will-app';

const defaultData = {
  mailserver: "",
  mailport: "",
  mailuser: "",
  mailpassword: "",
  mailfrom: "",
  mailtitle: "",
  mailto: "",
  factorverify: "true",
  factorissuer: "",
  approveurl: "",
  activateurl: "",
};

export default {
  props: {
    modes: Object,
    labels: Object,
  },
  emits: ["data-updated"],
  setup(props) {
    const mode = ref({action: "new", ...props.modes});
    const localData = ref({ ...defaultData }); 
    const reqalert = ref(props.labels.empty_alert);
    const requiredMessage = () => {
      return helpers.withMessage(reqalert, required);
    }
    const validateRules = computed(() => { 
      return {
        mailserver: { required: requiredMessage() },
        mailport: { required: requiredMessage() },
        mailuser: { required: requiredMessage() },
        mailpassword: { required: requiredMessage() },
        mailfrom: { required: requiredMessage() },
        mailtitle: { required: requiredMessage() },
        mailto: { required: requiredMessage() },
        factorissuer: { required: requiredMessage() },
        approveurl: { required: requiredMessage() },
        activateurl: { required: requiredMessage() },
      } 
    });
    const v$ = useVuelidate(validateRules, localData, { $lazy: true, $autoDirty: true });
    return { mode, v$, localData, reqalert };
  },
  created() {
    watch(this.$props, (newProps) => {      
      this.reqalert = newProps.labels.empty_alert;
    });
  },
  mounted() {
    this.$nextTick(function () {
      this.retrieveRecord();
    });
  },
  methods: {
    reset(newData,newMode) {
      if(newData) this.localData = {...newData};
      if(newMode) this.mode = {...newMode};
    },
    submit() {      
      this.$emit('update:formData', this.localData);
    },
    async updateClick() {
      console.log("click: update");
      let valid = await this.validateForm();
      if(!valid) return;
      this.startUpdateRecord();
    },
    async validateForm(focusing=true) {
      const valid = await this.v$.$validate();
      console.log("validate form: valid",valid);
      console.log("error:",this.v$.$errors);
      if(!valid) {
        if(focusing) {
          this.focusFirstError();
        }
        return false;
      }
      return true;
    },
    focusFirstError() {
      if(this.v$.$errors && this.v$.$errors.length > 0) {
        let input = this.v$.$errors[0].$property;
        let el = this.$refs[input];
        if(el) el.focus(); //if using ref
        else $("#"+input).trigger("focus"); //if using id
      }
    },
    startUpdateRecord() {
      confirmUpdate(() => { 
        this.updateRecord(this.localData);
      });
    },
    updateRecord(dataRecord) {
        let jsondata = {ajax: true};
        let formdata = serializeParameters(jsondata,dataRecord);
        startWaiting();
        $.ajax({
          url: getApiUrl()+"/api/sfte012/update",
          data: formdata.jsondata,
          headers : formdata.headers,
          type: "POST",
          dataType: "json",
          contentType: DEFAULT_CONTENT_TYPE,
          error : function(transport,status,errorThrown) {
            console.error("error: status",status,"errorThrown",errorThrown);
            submitFailure(transport,status,errorThrown);
          },
          success: (data) => {
            stopWaiting();
            console.log("success",data);
            if(detectErrorResponse(data)) return;
            successbox();
            this.$emit('data-updated',dataRecord,data);
          }
      });
    },
    retrieveRecord(dataKeys) {
      let jsondata = {ajax: true};
      let formdata = serializeParameters(jsondata,dataKeys || {});
      startWaiting();
      $.ajax({
        url: getApiUrl()+"/api/sfte012/retrieve",
        data: formdata.jsondata,
        headers : formdata.headers,
        type: "POST",
        dataType: "json",
        contentType: DEFAULT_CONTENT_TYPE,
        error : function(transport,status,errorThrown) {
          console.error("retrieveRecord: error: status",status,"errorThrown",errorThrown);
          submitFailure(transport,status,errorThrown);
        },
        success: (data) => {
          stopWaiting();
          console.log("retrieveRecord: success",data);
          if(data.body.dataset) {
            this.reset(data.body.dataset,{action:"edit"});
            this.v$.$reset();
          }
        }
      });	
    },
    toggleCollapseExpand(event) {
      console.log("toggle",event);
      let $src = $(event.target).parent();
      if($src.is(".down")) {
        $src.removeClass("down").addClass("up");
        $src.find(".fa").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
        let $part = $src.parents("table").eq(0);
        $part.nextUntil("table.partition-table").show();
      } else {
        $src.removeClass("up").addClass("down");
        $src.find(".fa").removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
        let $part = $src.parents("table").eq(0);
        $part.nextUntil("table.partition-table").hide();
      }	
    },
  }
};
</script>
