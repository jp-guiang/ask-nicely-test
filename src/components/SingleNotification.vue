<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { PropType } from 'vue'
import type { NotificationModel } from '@/models/notification-model'

const props = defineProps({
  notification: {
    type: Object as PropType<NotificationModel>
  }
})

const initials = computed(() => {
  let initials = props.notification.author.match(/\b\w/g)?.join('') || ''
  return initials
})
</script>

<template>
  <div class="text-white p-4 flex border-b-2 border-b-white/[.1]">
    <div class="w-1/12 p-2 flex text-center items-center justify-around">
      <div class="p-2">
        <div v-if="notification.read" class="p-1 rounded-full bg-white"></div>
      </div>
      <div class="w-12 h-12 bg-amber-300 flex items-center justify-center rounded-full">
        <p>
          {{ initials }}
        </p>
      </div>
    </div>
    <div class="w-full p-2 flex flex-wrap">
      <div class="w-full">
        <h1 class="font-bold pb-4">
          {{ notification.title }}
        </h1>
        <p class="pb-4">
          {{ notification.preview_text }}
        </p>
      </div>
      <div class="w-full flex justify-between uppercase">
        <p class="text-name-time-label">
          {{ notification.author }}
        </p>
        <p class="text-name-time-label">
          {{ notification.created }}
        </p>
      </div>
      <p>
        {{ notification.available_actions }}
      </p>
    </div>
  </div>
</template>
