<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="updateProfile">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="profile.image" class="form-control" type="text" placeholder="URL of profile picture" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="profile.username" class="form-control form-control-lg" type="text" placeholder="Your Name" />
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="profile.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="profile.email" class="form-control form-control-lg" type="email" placeholder="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="profile.password" class="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" :disabled="updating">Update Settings</button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations} from 'vuex'
import { updateUser } from '@/api/user'

export default {
  middleware: 'authenticated',
  name: "SettingsIndex",

  data() {
    return {
      profile: {
        image: '',
        username: '',
        bio:'',
        email: '',
        password: ''
      },
      updating: false
    }
  },

  computed: {
    ...mapState(['user'])
  },

  mounted () {
    // 获取vuex中的用户信息
    Object.keys(this.profile).forEach(key  => {
      if (this.user[key]) {
        this.profile[key] = this.user[key]
      }
    })
  },

  methods: {
    ...mapActions(['updateUserState']),
    ...mapMutations(['cleanUser']),

    async updateProfile () {
     this.updating = true

     let user = {}
     Object.keys(this.profile).forEach(key => {
       if (this.profile[key] !== '') {
         user[key] = this.profile[key] 
       }
     })

     await this.updateUserState(user)
     this.updating = false
      this.$router.push({
        name: 'profile',
        params: {
          username: this.user.username
        }
      })
    },

    logout () {
      this.cleanUser()
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
</style>