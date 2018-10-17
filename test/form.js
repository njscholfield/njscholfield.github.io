const emptyForm = {
  category: '',
  item: '',
  quantity: 1
};
const form = new Vue({
  el: '#vue-app',
  data: {
    formData: Object.assign({}, emptyForm),
    submissionData: [],
    showForm: false
  },
  methods: {
    submit(event) {
      this.submissionData.push(this.formData);
      this.formData = Object.assign({}, emptyForm);
      this.showForm = false;
      event.target.reset();
    },
    toggleForm() {
      this.showForm = !this.showForm;
    }
  }
});