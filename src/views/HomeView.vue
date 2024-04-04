<template>
  <ul class="home">
    <li v-for="item in data" :key="item.num">
      {{item.name}}
      <button @click="setData({name:'수정이름',email:'000@gmail.com',num:item.num})">
        수정
      </button>
      <button @click="delData(item.num)">삭제</button>
    </li>
  </ul>

  <button @click="postData({name:'나그네4',email:'test@gmail.com'})">
    저장
  </button>

</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    
  },
  computed:{
    ...mapState('testMember', ['data'])
  },
  methods:{    
    ...mapMutations('testMember', ['getData','postData','setData','delData']),
  },
  created(){
    this.getData()
  },
  mounted(){    
    console.log(this.data)
  }


}
</script>
