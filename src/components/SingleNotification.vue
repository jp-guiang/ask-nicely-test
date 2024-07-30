<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { NotificationModel } from '@/models/notification-model'
import { createToDo } from '../services/notifications-api'
import { AvailableActions } from '@/enums/available-actions-enum'

const props = defineProps<{
  notification: NotificationModel
}>()

const initials = computed(() => {
  return props.notification.author.match(/\b\w/g)?.join('') || ''
})

const has_create_todo = computed(() => {
  return props.notification.available_actions.includes(AvailableActions.CREATE_TODO)
})

const dynamicBgColor = computed(() => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
})

const callToDoApi = () => {
  if (has_create_todo.value) {
    createToDo(props.notification)
  }
}
</script>

<template>
  <div
    class="text-white p-4 flex border-b-2 border-b-white/[.1]"
    @click="callToDoApi"
    :class="[has_create_todo ? 'cursor-pointer' : '', has_create_todo ? 'hover:ring' : '']"
  >
    <div class="w-1/12 p-2 flex text-center items-center justify-around">
      <div class="p-2">
        <div v-if="notification.read" class="p-1 rounded-full bg-white"></div>
      </div>
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full"
        :style="{ backgroundColor: dynamicBgColor }"
      >
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
      <p v-if="has_create_todo">
        {{ has_create_todo }}
      </p>
    </div>
  </div>
</template>
