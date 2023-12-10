import './style/style.css';
import $ from 'jquery';
import './component/head-app.js';

const pencarianFilm = () => {
  const cariFilm = document.getElementById('masukanItem');
  const hasilPencarianFilm = document.getElementById('hasilPencarianFilm');
  hasilPencarianFilm.innerHTML = '';
  const q = cariFilm.value;
  const apiKey = '4714577494d65160c2491108ca1fa5cc';
  const baseUrl = 'https://api.themoviedb.org/3/';

  const searchMovie = (q) => {
    const APILink = `${baseUrl}search/movie?&api_key=${apiKey}&query=${q}`;

    $.ajax({
      url: APILink,
      dataType: 'json',
      success: (hasilCariFilm) => {
        let movies = hasilCariFilm.results;
        console.log(movies);
        if (movies.length >= 1) {
          hasilPencarianFilm.innerHTML = '';
          console.log('berhasil');
          $.each(movies, (i, detail) => {
            $('#hasilPencarianFilm').append(`
            <div id="daftarHasilPencarianFilm">
            <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" alt="${detail.title}" />
            <div class="detailHasilPencarianFilm">
                <h3>${detail.title}</h3>
                <p><b>Tanggal Rilis</b> : ${detail.release_date}</p>
                <p><b>Rating</b> : ${detail.vote_average}</p>
                <p><b>Deskripsi</b> : ${detail.overview}</p>                             
            </div>
            </div>
          `);
          });

          document.body.classList.add('search-active'); 
        } else {
          hasilPencarianFilm.innerHTML = '';
          $('#hasilPencarianFilm').html(`
          <div class="eror">
            <h2>Film Tidak Ditemukan!</h2>
            <p>Film yang Anda cari tidak ditemukan, silahkan Anda memasukan kata kunci dengan benar<p>
          </div>
        `);
        }
      },
      error: () => {
        $('#hasilPencarianFilm').html(`
          <div class="eror">
            <h2>Error!</h2>
            <p>Terjadi kesalahan saat melakukan pencarian film.</p>
          </div>
        `);
      },
      type: 'GET',
    });
  };

  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', () => {
    searchMovie(cariFilm.value);
  });
};

document.addEventListener('DOMContentLoaded', pencarianFilm);
