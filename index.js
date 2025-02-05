$(document).ready(function() {
    $('#getCountry').on('click', function() {
        const countryName = $('#countryInput').val().trim();

        if (countryName) {
            $.ajax({
                url: `https://restcountries.com/v3.1/name/${countryName}`,
                method: 'GET',
                success: function(data) {
                    $('#countryList').empty(); 

                    const country = data[0]; 
                    const countryItem = $('<li class="country"></li>');
                    countryItem.html(`
                        <h3>${country.name.common}</h3>
                        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                        <p><strong>Region:</strong> ${country.region}</p>
                        <p><strong>Population:</strong> ${country.population}</p>
                        <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
                    `);
                    $('#countryList').append(countryItem);

                    $('#countryInput').val('');
                },
                error: function() {
                    $('#countryList').html('<p>Kota tidak ditemukan. Silakan coba lagi.</p>');
                }
            });
        } else {
            alert('Silakan masukkan nama negara!');
        }
    });
});
