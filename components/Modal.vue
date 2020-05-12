<template>
  <div class="font-body">
    <transition name="modal">
      <div v-if="showModal" class="modal-mask text-white">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header font-bold">
              <h3 class="text-center font-extrabold mb-10 text-xl" name="header">Contact</h3>
              <div class="flex flex-row mb-10">
                <div class="w-1/3 text-center underline">
                  <a href="mailto:danieljonguitud20@gmail.com">
                    <button class="bg-red rounded font-light p-2 hover:bg-reddark transition-colors duration-150 ease-in-out">
                      Send an Email
                      <fa :icon="['fas', 'envelope']" />
                    </button>
                  </a>
                </div>
                <div class="w-1/3 text-center underline">
                  <a
                    href="https://api.whatsapp.com/send?phone=527821573907&text=Hello,%20I'm%20contacting%20you%20from%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="bg-github text-white rounded font-light p-2 hover:bg-githubdark transition-colors duration-150 ease-in-out">
                      Send a WhatsApp
                      <fa :icon="['fab', 'whatsapp']" />
                    </button>
                  </a>
                </div>
                <div class="w-1/3 text-center underline">
                  <a
                    href="https://www.linkedin.com/in/danieljonguitud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      class="bg-linkedin text-white rounded font-light p-2 hover:bg-linkedindark transition-colors duration-150 ease-in-out"
                    >
                      Contact on Linkedin
                      <fa :icon="['fab', 'linkedin']" />
                    </button>
                  </a>
                </div>
              </div>
              <!-- <form class="mt-4" method="POST" action="https://script.google.com/macros/s/AKfycbxoqHcZVKnRcyd3jaGp5xgZOoRo2dQrMe1esSPu/exec">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Name">Name</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Message</label>
                <textarea
                  cols="10"
                  rows="3"
                  name="message"
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-yellow hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >Send</button>
              </div>
              </form>-->
            </div>
            <div class="modal-footer pb-6">
              <button class="modal-default-button" @click="$emit('close')">OK</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease-in-out;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #1a1a1a;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease-in-out;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter-active .modal-container {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>