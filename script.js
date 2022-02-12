const listJadwal = [];

function clearListJadwal(){
	const jadwalListBody = document.getElementById('jadwalListBody');
	while(jadwalListBody.firstChild){
		jadwalListBody.removeChild(jadwalListBody.firstChild);
	}
}
function removeListJadwal(index){
	listJadwal.splice(index, 1);
	displayListJadwal();
}

function modalListJadwal(jadwal){
    //modal header
    const h5 = document.createElement('h5');
    h5.textContent = jadwal;
    h5.classList.add('modal-title');
    const btnHeader = document.createElement('button');
    btnHeader.type = "button";
    btnHeader.classList.add('btn-close');
    btnHeader.setAttribute("data-bs-dismiss", "modal");
    btnHeader.setAttribute("aria-label", "Close");

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalHeader.appendChild(h5);
    modalHeader.appendChild(btnHeader);

    //modal body
    const labelJudul = document.createElement('label');
    labelJudul.for = "judul";
    labelJudul.classList.add('form-label');
    labelJudul.textContent = "Judul Jadwal : ";

    const inputJudul = document.createElement('input');
    inputJudul.type = "text";
    inputJudul.classList.add('form-control');
    inputJudul.id = "judul";

    const divjudul = document.createElement('div');
    divjudul.classList.add('mb-3');
    divjudul.appendChild(labelJudul);
    divjudul.appendChild(inputJudul);

    const labelDesc = document.createElement('label');
    labelDesc.for = "textarea";
    labelDesc.textContent = "Deskripsi(Opsional)";

    const textarea = document.createElement('textarea');
    textarea.id = "textarea";
    textarea.classList.add('form-control');

    const divDesc = document.createElement('div');
    divDesc.classList.add('mb-3');
    divDesc.appendChild(labelDesc);
    divDesc.appendChild(textarea);

    const labelSwitch = document.createElement('label');
    labelSwitch.classList.add('form-check-label');
    labelSwitch.for = "tanggal";
    labelSwitch.textContent = "Tambahkan tanggal";

    const inputSwitch = document.createElement('input');
    inputSwitch.classList.add('form-check-input');
    inputSwitch.type = "checkbox";
    inputSwitch.id = "tanggal";
    inputSwitch.setAttribute("role", "switch");

    const formCheck = document.createElement('div');
    formCheck.classList.add('form-check');
    formCheck.classList.add('form-switch');
    formCheck.appendChild(labelSwitch);
    formCheck.appendChild(inputSwitch);

    const inputField = document.createElement('input');
    inputField.type = "datetime-local";
    inputField.classList.add('form-control');
    inputField.id = "datetimelocal";

    const fieldset = document.createElement('fieldset');
    fieldset.appendChild(inputField);

    const divDate = document.createElement('div');
    divDate.classList.add('mb-3');
    divDate.appendChild(formCheck);
    divDate.appendChild(fieldset);

    const btnClose = document.createElement('button');
    btnClose.type = 'button';
    btnClose.classList.add('btn');
    btnClose.classList.add('btn-secondary');
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.textContent = "Batal";

    const btnTambah = document.createElement('button');
    btnTambah.type = "submit";
    btnTambah.classList.add('btn');
    btnTambah.classList.add('btn-secondary');
    btnTambah.textContent = "Tambah jadwal";

    const divFooter = document.createElement('div');
    divFooter.classList.add('modal-footer');
    divFooter.appendChild(btnClose);
    divFooter.appendChild(btnTambah);

    const form = document.createElement("form");
    form.appendChild(divjudul);
    form.appendChild(divDesc);
    form.appendChild(divDate);
    form.appendChild(divFooter);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.appendChild(form);

    //modal content
    const divContent = document.createElement('div');
    divContent.classList.add('modal-content');
    divContent.appendChild(modalHeader);
    divContent.appendChild(modalBody);

    // modal dialog
    const divDialog = document.createElement('div');
    divDialog.classList.add('modal-dialog');
    divDialog.classList.add('modal-dialog-centered');
    divDialog.classList.add('modal-dialog-scrollable');
    divDialog.appendChild(divContent);

    //Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('fade');
    modal.id = `modal-${jadwal}`;
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-hidden", "true");
    modal.appendChild(divDialog);

    const modalbody = document.getElementById('modalBody');
    modalbody.appendChild(modal);
}

function addListJadwal(index, jadwal){
	const h4 = document.createElement('h4');
    h4.textContent = jadwal;
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.classList.add('text-center');
    cardHeader.appendChild(h4);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = '...';

    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    ul.classList.add('list-group-flush');
    ul.appendChild(li);

    const btn = document.createElement('button');
    btn.type = "submit";
    btn.classList.add('btn');
    btn.classList.add('btn-secondary');
    btn.classList.add('btn-sm');
    btn.classList.add('me-2');
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", `#modal-${jadwal}`);
    btn.textContent = 'tambah jadwal';

    const btnHapus = document.createElement('button');
    btnHapus.type = "button";
    btnHapus.classList.add('btn');
    btnHapus.classList.add('btn-secondary');
    btnHapus.classList.add('btn-sm');
    btnHapus.onclick = function(){
    	removeListJadwal(index);
    }
    btnHapus.textContent = "hapus jadwal";

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.appendChild(btn);
    cardFooter.appendChild(btnHapus);

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(cardHeader);
    card.appendChild(ul);
    card.appendChild(cardFooter);

    const col = document.createElement('div');
    col.classList.add('col-md-6');
    col.classList.add('mb-3');
    col.appendChild(card);

	const jadwalListBody = document.getElementById('jadwalListBody');
	jadwalListBody.appendChild(col);

	modalListJadwal(jadwal);
}

function displayListJadwal(){
	clearListJadwal();

	for(let i = 0; i < listJadwal.length; i++){
		const jadwal = listJadwal[i];	

        addListJadwal(i, jadwal);
	}
}

document.forms['formJadwalBaru'].onsubmit = function(event){
	event.preventDefault();

	const jadwal = document.forms['formJadwalBaru']['judulJadwal'].value;
	listJadwal.push(jadwal);

	document.forms['formJadwalBaru'].reset();

	console.log(listJadwal);
	displayListJadwal();
}

displayListJadwal();