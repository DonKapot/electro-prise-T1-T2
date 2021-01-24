<script lang="ts">
  let SOCIAL_NORM_KVH = 85;
  let TARIF_DAY_NORM = 2.84;
  let TARIF_DAY_OVER = 5.55;
  let TARIF_NIGHT_NORM = 1.39;
  let TARIF_NIGHT_OVER = 2.9;

  let currentDataT1 = 0;
  let currentDataT2 = 0;
  let prevDataT1 = 0;
  let prevDataT2 = 0;
  let resultT1 = 0;
  let resultT2 = 0;
  let resultCommon = 0;
  let socNormT1 = 0;
  let socNormT2 = 0;
  let socNormOverT1 = 0;
  let socNormOverT2 = 0;
  let resultNormT1 = 0;
  let resultNormT2 = 0;
  let resultOverT1 = 0;
  let resultOverT2 = 0;
  let endResult = 0;

  $: {
    resultT1 = currentDataT1 - prevDataT1;
    resultT2 = currentDataT2 - prevDataT2;
  
    resultCommon = resultT1 + resultT2;
  
    if (resultCommon) {
      socNormT1 = SOCIAL_NORM_KVH * resultT1 / resultCommon;
      socNormT2 = SOCIAL_NORM_KVH * resultT2 / resultCommon;
      socNormOverT1 = resultT1 - socNormT1;
      socNormOverT2 = resultT2 - socNormT2;
  
      resultNormT1 = socNormT1 * TARIF_DAY_NORM;
      resultNormT2 = socNormT2 * TARIF_NIGHT_NORM;
      resultOverT1 = socNormOverT1 * TARIF_DAY_OVER;
      resultOverT2 = socNormOverT2 * TARIF_NIGHT_OVER;
      
      endResult = resultNormT1 + resultNormT2 + resultOverT1 + resultOverT2;
    }
  }
</script>

<main class="main-wrapper">
  <div class="row">
    <label>
      <p>Tarif T1 normal</p>
      <input id="tarifT1Norm" type="number" bind:value="{TARIF_DAY_NORM}"/>
    </label>
    <label>
      <p>Tarif T1 over normal</p>
      <input id="tarifT1Over" type="number" bind:value="{TARIF_DAY_OVER}"/>
    </label>
  </div>
  <div class="row">
    <label>
      <p>Tarif T2 normal</p>
      <input id="tarifT2Norm" type="number" bind:value="{TARIF_NIGHT_NORM}"/>
    </label>
    <label>
      <p>Tarif T2 over normal</p>
      <input id="tarifT2Over" type="number" bind:value="{TARIF_NIGHT_OVER}"/>
    </label>
  </div>
  <div class="row">
    <label>
      <p>Soc normal</p>
      <input id="socNorm" type="number" bind:value="{SOCIAL_NORM_KVH}"/>
    </label>
  </div>
  <div class="row">
    <label>
      <p>current Data T1</p>
      <input id="currentInput1" type="number" bind:value="{currentDataT1}"/>
    </label>
    <label>
      <p>current Data T2</p>
      <input id="currentInput2" type="number" bind:value="{currentDataT2}"/>
    </label>
  </div>
  <div class="row">
    <label>
      <p>Previous Data T1</p>
      <input id="prevInput1" type="number" bind:value="{prevDataT1}"/>
    </label>
    <label>
      <p>Previous Data T2</p>
      <input id="prevInput2" type="number" bind:value="{prevDataT2}"/>
    </label>
  </div>
  <div class="row">
    <span>Result Prise: </span>
    <span id="result">{endResult}</span>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
  }
  
  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  
  .row {    
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }
</style>