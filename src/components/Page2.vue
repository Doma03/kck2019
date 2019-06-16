  <template>
  <div>
   <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <v-container fluid="" grid-list-md="" text-xs-center="">
      <v-layout>
        <div>

        </div>
        <v-flex d-flex="" xs6="" sm6="" md6="">
          <v-card color="pink" dark="">
            <v-card-title primary="" class="title"></v-card-title>
            <v-card-text>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex d-flex=""  v-for="n in 2" :key="n">
          <v-layout row="" wrap="">
            <v-flex v-for="n in 32" sm12="" :key="n">
              <v-card color="red" dark="">
                <v-card-text></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-btn v-on:click="back">Back</v-btn>

      </v-layout>
    </v-container>
  </vue-custom-scrollbar>
 </div>
</template>
<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
    scrollHanle() {
      //console.log(evt)
    },
    back() {
      this.$router.push('/');
  }
}
}
</script>
<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 950px;
}
</style>
