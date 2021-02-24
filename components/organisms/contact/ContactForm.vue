<template>
  <div>
    <form
      id="contactForm"
      method="post"
      novalidate="true"
      netlify-honeypot="bot-field"
      name="contact"
      data-netlify="true"
      class="w-full mb-16 font-ja"
      @submit="checkForm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <label class="block tracking-wide text-sm font-bold mb-2" for="name">
            お名前<span class="text-red-600"> *</span>
          </label>
          <input
            id="name"
            v-model="name"
            :class="[
              nameErrors.length
                ? 'input-error-bg border-2 input-error-border'
                : 'border input-border',
            ]"
            :maxlength="nameMaxlength"
            type="text"
            name="name"
            placeholder="加藤かな"
            class="appearance-none block w-full input-bg rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          />
          <div class="text-red-600 text-xs font-bold h-8">
            <ul v-if="nameErrors.length">
              <li v-for="(error, index) in nameErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <label class="block tracking-wide text-sm font-bold mb-2" for="email">
            メールアドレス<span class="text-red-600"> *</span>
          </label>
          <input
            id="email"
            v-model="email"
            :class="[
              emailErrors.length
                ? 'input-error-bg border-2 input-error-border'
                : 'border input-border',
            ]"
            :maxlength="emailMaxlength"
            type="text"
            name="email"
            placeholder="kana@example.com"
            class="appearance-none block w-full input-bg rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          />
          <div class="text-red-600 text-xs font-bold h-8">
            <ul v-if="emailErrors.length">
              <li v-for="(error, index) in emailErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-sm font-bold mb-2"
            for="message"
          >
            メッセージ<span class="text-red-600"> *</span>
          </label>
          <textarea
            id="message"
            v-model="message"
            :class="[
              messageErrors.length
                ? 'input-error-bg border-2 input-error-border'
                : 'border input-border',
            ]"
            :maxlength="messageMaxlength"
            name="message"
            placeholder="依頼内容やご意見など"
            class="resize-y appearance-none block w-full input-bg rounded py-3 px-4 mb-3 h-48 leading-tight focus:outline-none"
          ></textarea>
          <div class="text-red-600 text-xs font-bold h-8">
            <ul v-if="messageErrors.length">
              <li v-for="(error, index) in messageErrors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full mt-2">
        <button
          :disabled="!isValid"
          :class="[isValid ? 'cursor-pointer shadow-lg' : 'cursor-not-allowed']"
          type="submit"
          class="submit-button font-bold tracking-widest w-full py-4 px-4 rounded-full focus:outline-none"
        >
          <i class="fas fa-paper-plane"></i> 送 信
        </button>
      </div>
    </form>
  </div>
</template>

<script>
const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const _nameMaxlength = 25
const _emailMaxlength = 254
const _messageMaxlength = 2000

export default {
  data() {
    return {
      name: '',
      nameErrors: [],
      email: '',
      emailErrors: [],
      message: '',
      messageErrors: [],
      nameMaxlength: _nameMaxlength,
      emailMaxlength: _emailMaxlength,
      messageMaxlength: _messageMaxlength,
    }
  },
  computed: {
    isValid() {
      return (
        this.name &&
        !this.nameErrors.length > 0 &&
        this.email &&
        !this.emailErrors.length > 0 &&
        this.message &&
        !this.messageErrors.length > 0
      )
    },
  },
  watch: {
    name() {
      this.validateName()
    },
    email() {
      this.validateEmail()
    },
    message() {
      this.validateMessage()
    },
  },
  methods: {
    checkForm(e) {
      if (this.validate()) {
        return true
      }
      e.preventDefault()
    },
    validate() {
      this.name = this.name.trim()
      this.email = this.email.trim()
      this.message = this.message.trim()

      const name = this.validateName()
      const email = this.validateEmail()
      const message = this.validateMessage()
      return name && email && message
    },
    validateName() {
      this.nameErrors = []
      if (!this.name) {
        this.nameErrors.push('名前を入力してください')
        return false
      }
      if (this.name.length > _nameMaxlength) {
        this.nameErrors.push(_nameMaxlength + '文字以内で入力してください')
        return false
      }
      return true
    },
    validateEmail() {
      this.emailErrors = []
      if (!this.email) {
        this.emailErrors.push('メールアドレスを入力してください')
        return false
      }
      if (this.email.length > _emailMaxlength) {
        this.emailErrors.push(_emailMaxlength + '文字以内で入力してください')
        return false
      }
      if (!emailRE.test(this.email)) {
        this.emailErrors.push('メールアドレスの形式で入力してください')
        return false
      }
      return true
    },
    validateMessage() {
      this.messageErrors = []
      if (!this.message) {
        this.messageErrors.push('メッセージを入力してください')
        return false
      }
      if (this.message.length > _messageMaxlength) {
        this.messageErrors.push(
          _messageMaxlength + '文字以内で入力してください'
        )
        return false
      }
      return true
    },
  },
}
</script>

<style scoped>
.submit-button {
  color: #e25b45;
  color: var(--accent-color);
  background-color: #fff;
  background-color: var(--main-bg);
  border: 1px #e25b45 solid;
  border: 1px var(--accent-color) solid;
}
.submit-button:hover:not([disabled]) {
  transition: all 0.25s ease;
  background-color: #e25b45;
  background-color: var(--accent-color);
  color: #fff;
}
.submit-button:disabled {
  color: #4a5568;
  color: var(--button-disabled);
  background-color: #fff;
  background-color: var(--main-bg);
  border: 1px #4a5568 solid;
  border: 1px var(--button-disabled) solid;
}
.input-bg {
  background-color: #edf2f7;
  background-color: var(--input-bg);
}
.input-bg:focus {
  background-color: #fff;
  background-color: var(--input-bg-focus);
}
.input-border {
  border-color: #edf2f7;
  border-color: var(--input-border);
}
.input-border:focus {
  border-color: #a0aec0;
  border-color: var(--input-border-focus);
}
.input-error-bg {
  background-color: #fff5f5;
  background-color: var(--input-error-bg);
}
.input-error-border {
  border-color: #e53e3e;
  border-color: var(--input-error-border);
}
.input-error-border:focus {
  border-color: #e53e3e;
  border-color: var(--input-error-border);
}
</style>
