<template>

  <v-container fluid grid-list-md text-xs-center>
    <v-layout>
       <div>

 </div>
      <v-flex d-flex xs6 sm6 md6>
        <v-card color="yellow" dark>
          <v-card-title primary class="title"></v-card-title>
          <v-card-text>{{silnia()}}</v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex  v-for="n in 2" :key="n">
        <v-layout row wrap>
          <v-flex v-for="n in 16" sm12 :key="n">
            <v-card color="blue" dark>
              <v-card-text>{{silnia()}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-btn v-on:click="page2">Przycisk</v-btn>
      <v-btn v-on:click="losowanie">Losowanie</v-btn>

    </v-layout>
  </v-container>
</template>
<script>
    export default {
        data: function () {
            return {
                count: 0,
                lastRandom:0
            }
        },
      methods: {
          page2(){

              this.$router.push('/page2')
          },
          losowanie: function () {
              let random=Math.random()*10000
              /*Wersja na electrona*/
              const con = require('electron').remote.getGlobal('console')
              con.log(this.lastRandom , random)

              /*Wersja na przeglądarke*/
              /* eslint-disable no-console */
              //console.log(this.lastRandom , random);
              /*Koniec wersji na przeglądarke i koncząca formuła by sie zapisała ostatnia wylosowana*/
              this.lastRandom=random
          },
          silnia: function (){
              let x = 1
              for(let i=1; i<=this.count; i++){
                  x = x*i
              }
              this.count++;
              return x;
          }
      }
  }

</script>
<style >

</style>
