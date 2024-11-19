<template>
  <div>
    <h3 class="font-semibold text-xl mb-2">Выберите дату</h3>
    <DatePicker
      v-model="date"
      fluid
      inline
      :min-date="new Date()"
    />
    <MainButton
      @click="onSubmit"
      text="Подтвердить"
      :visible="!!date"
    />
  </div>
</template>

<script setup lang="ts">
import {
  MainButton,
  useWebApp,
  useWebAppPopup,
  useWebAppHapticFeedback,
} from 'vue-tg'

const { sendData } = useWebApp()
const { showConfirm } = useWebAppPopup()
const { notificationOccurred } = useWebAppHapticFeedback()

const route = useRoute()

const date = ref<Date>(new Date())
const formattedDate = useDateFormat(date, 'YYYY-MM-DD')

const serializedData = computed((): string => JSON.stringify({
  date: formattedDate.value,
  extraData: route.query?.extraData,
}))

const onSubmit = () => {
  const message = `Вы уверены что хотите подтвердить на дату ${formattedDate.value}`
  showConfirm?.(message, (ok: boolean) => {
    if (!ok) return
    notificationOccurred?.('success')
    sendData?.(serializedData.value)
  })
}
</script>
