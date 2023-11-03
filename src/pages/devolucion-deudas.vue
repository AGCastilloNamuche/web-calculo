<script setup>
import { onMounted } from 'vue'

const c = ref(0)
const cd = ref(0)
const p = ref() // pago
const n = ref() // tiempo
const i = ref() //interes 

const calcularDevolucion = () => {
    i.value /= 100;

    c.value = (p.value * i.value) / 1 - (Math.pow(1 + i.value, -n.value));

    cd.value = (p.value * (1 + i.value * n.value)) / n.value;
}

onMounted(() => {
})
</script>
<template>
    <div>
        <v-breadcrumbs class="mb-5" :items="['Cálculo de la anualidad']">
            <template v-slot:prepend>
                <v-icon size="small" icon="tabler-home"></v-icon>
            </template>
        </v-breadcrumbs>

        <VCard class="mb-6" title="PROGRAMA DE DEVOLUCION DE DEUDAS  🚀">
            <VCardText>
                <VRow>
                    <VCol cols="12" md="6">
                        <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos iniciales</h4>
                        <VForm @submit.prevent="calcularDevolucion()">
                            <VRow>

                                <VCol cols="12">
                                    <AppTextField v-model="p" prepend-inner-icon="tabler-number" label="Prestamo"
                                        placeholder="Prestamo" type="number" />
                                </VCol>

                                <VCol cols="12">
                                    <AppTextField v-model="i" prepend-inner-icon="tabler-number" label="Tasa de interés "
                                        placeholder="Tasa de interes %" type="number" />
                                </VCol>
                                <VCol cols="12">
                                    <AppTextField v-model="n" prepend-inner-icon="tabler-number" label="Numero de cuotas"
                                        placeholder="Numero de cuotas" type="number" />
                                </VCol>

                                <VCol cols="12">
                                    <VBtn type="submit" class="me-2">
                                        Calcular
                                    </VBtn>

                                    <VBtn color="secondary" type="reset" variant="tonal">
                                        Limpiar
                                    </VBtn>
                                </VCol>
                            </VRow>
                        </VForm>
                    </VCol>
                    <VCol cols="12" md="6">
                        <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">
                            Resultados
                        </h4>

                        <VDivider />
                        <div class="pt-4 px-3">
                            <p>Cuota plana: {{ Math.abs(c.toFixed(2)) }}</p>
                            <p>Cuota directa: {{ Math.abs(cd.toFixed(2)) }}</p>
                        </div>

                        <VDivider />
                    </VCol>
                </VRow>

            </VCardText>
        </VCard>


    </div>
</template>
