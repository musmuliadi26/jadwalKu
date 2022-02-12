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
        btn.setAttribute("data-bs-target", "#modal-jadwalUAS");
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