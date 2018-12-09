import Vue from "vue";
import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import NotFound from "@/views/NotFound.vue";

describe("NotFound.vue", function() {
  let wrp;

  beforeEach(() => {
    Vue.use(Vuetify);
    wrp = mount(NotFound);
  });

  it("display content not found message", () => {
    const msg = "Content Not Found";
    expect(wrp.text()).toMatch(msg);
  });
});
