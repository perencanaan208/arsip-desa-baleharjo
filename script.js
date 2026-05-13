function showPage(pageId){

  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active-page");
  });

  document.getElementById(pageId).classList.add("active-page");

  document.querySelectorAll(".menu-btn").forEach(btn=>{
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}

const years = `
<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>2029</option>
<option>2030</option>
`;

const rpjmActivities = [
"Penyelenggaraan Musdes tentang perencanaan Desa",
"Pembentukan tim penyusun RPJM Desa",
"Penyelarasan arah kebijakan Perencanaan Pembangunan Desa",
"Pengkajian keadaan Desa",
"Penyusunan rancangan RPJM Desa",
"Penyelenggaraan Musrenbang Desa",
"Penyelenggaraan Musdes membahas RPJM Desa",
"Musyawarah BPD RPJM Desa",
"Sosialisasi RPJM Desa",
"Dokumen Perdes"
];

const rkpActivities = [
"Musyawarah Desa perencanaan pembangunan tahunan",
"Pembentukan tim penyusun RKP Desa",
"Pencermatan pagu indikatif",
"Pencermatan ulang RPJM Desa",
"Penyusunan RKP Desa",
"Musrenbang Desa pembahasan RKP Desa",
"Musyawarah Desa penetapan RKP Desa",
"Musyawarah BPD penetapan Perdes RKP Desa",
"Dokumen Perdes"
];

const apbActivities = [
"Penyusunan Rancangan Perdes APB Desa",
"Musyawarah BPD Pembahasan APB Desa",
"Penyusunan Perkades Penjabaran APB Desa",
"Evaluasi Rancangan Perdes APB Desa",
"Penetapan Perdes APB Desa",
"Penyampaian Informasi APB Desa",
"Dokumen Perdes"
];

function createActivities(containerId, activities){

  const container = document.getElementById(containerId);

  activities.forEach(activity=>{

    const card = document.createElement("div");
    card.className = "activity-card";

    let photoSection = `
      <label>Upload Foto</label>
      <input type="file" multiple>
    `;

    if(activity === "Dokumen Perdes"){
      photoSection = "";
    }

    card.innerHTML = `
      <h3>${activity}</h3>

      <label>Tahun Kegiatan</label>
      <select>
        ${years}
      </select>

      <label>Upload PDF</label>
      <input type="file" accept=".pdf">

      ${photoSection}

      <div class="button-group">
        <button class="save-btn">Simpan</button>
        <button class="view-btn">Lihat Dokumen</button>
      </div>
    `;

    container.appendChild(card);
  });

}

createActivities("rpjm-container", rpjmActivities);
createActivities("rkp-container", rkpActivities);
createActivities("apb-container", apbActivities);
