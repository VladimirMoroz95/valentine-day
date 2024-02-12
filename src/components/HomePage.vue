<template>
  <div class="home-page-wrapper">
    <h1>
      Today I wanna congratulate you on Valentine's Day and say how much I love you.
    </h1>

    <div
        v-for="(link, index) in photoLinks"
        :key = index
        class="photo-wrapper"
    >
      <img class="photo" :src="link"/>
      <span class="translate">"{{ translates[index] }}"</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

const photoLinks = [
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/1.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/2.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/3.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/4.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/5.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/6.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/7.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/8.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/9.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/10.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/11.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/12.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/13.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/14.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/15.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/16.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/17.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/18.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/19.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/20.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/21.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/22.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/23.jpeg',
    'https://vm-pv-photos.s3.eu-central-1.amazonaws.com/24.jpeg',
]

const translates = [
    'Поздравляю с Днем Святого Валентина моя дорогая Полиночка!',
    'Твоя любовь наполняет мое сердце теплом, твой смех украшает мои дни, а твое присутствие делает каждое мгновение незабываемым. Ты не только моя жена, но и мой лучший друг, мое доверенное лицо и мой самый большой сторонник',
    'Даже мое тело кричит о том как сильно я люблю тебя',
    'Я люблю твой смех',
    'И я люблю тебя даже когда ты злишься',
    'Люблю тебя даже такой',
    'и такой',
    'Люблю тебя когда ты на стиле',
    'Я люблю тебя даже когда ты вышла из тюрьмы',
    'Я люблю тебя даже когда ты стала паркурщицей',
    'Я люблю тебя когда ты мокрая',
    'И когда ты сухая',
    'Я люблю тебя даже когда ты вышла замуж',
    'Я люблю все твои подарки',
    'И когда ты заботишься обо мне',
    'Я люблю тебя даже когда ты далеко от меня',
    'И когда рядом',
    'И когда спишь',
    'Мы с тобой так похожи',
    'и такие разные одновременно',
    'Я люблю целовать тебя',
    'Я люблю обнимать тебя',
    'Я люблю гулять с тобой',
    'Я люблю тебя, Полина Вашкевич!'
]

</script>

<style lang="sass" scoped>
h1
  width: 100%
  color: #413939

.home-page-wrapper
  display: flex
  flex-direction: column
  align-items: center
  gap: 16px
  padding: 32px 16px

.photo-wrapper
  display: flex
  flex-direction: column
  align-items: center
  gap: 8px
  width: fit-content
  max-width: 100%
  height: fit-content
  background: white
  padding-bottom: 6px

.photo
  max-width: 100%
  object-fit: cover

  @media (max-width: 500px)
    max-width: 320px

.translate
  font-size: 10px
  color: #b6b2b2
  max-width: 360px
</style>