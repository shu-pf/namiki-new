<template>
  <main>
    <header>
      <h1>
        <img
          src="/img/common/logo.png"
          srcset="/img/common/logo.png 1x, img/common/logo@2x.png 2x"
          height="40px"
          alt="活魚なみき"
        />
      </h1>
    </header>
    <Nuxt />
  </main>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-family: 'Times New Roman', 'YuMincho', 'Hiragino Mincho ProN',
    'Yu Mincho', 'MS PMincho', serif;
  font-size: 16px;
  color: #70644f;
  background-color: #e8e8e8;
  box-sizing: border-box;
}
header {
  position: fixed;
  z-index: 1000;
}
</style>
