<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La identidad corporativa es el conjunto de elementos visuales y comunicativos que representan la esencia y valores de una empresa, diferenciándola de sus competidores. 
    p.mb-4 Incluye el diseño del logo, la paleta de colores, la tipografía, los eslóganes y otros componentes gráficos y verbales. Una identidad corporativa sólida y coherente fortalece el reconocimiento de la marca, crea una imagen profesional y facilita la conexión emocional con los clientes, contribuyendo al éxito y posicionamiento de la empresa en el mercado.
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
