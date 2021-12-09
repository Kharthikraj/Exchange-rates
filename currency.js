document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.selector_base').onchange = function(){
        let cur = this.value
        fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=84b8ff80-56b8-11ec-ab41-b1b550491250&base_currency=${cur}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.form1').onsubmit = function(){
                let one = document.querySelector('.base_currency').value

                if (Number.isInteger(parseInt(one))) {
                    let to_convert = document.querySelector('.selector_cur').value
                    let result = one * data.data[to_convert]
                    document.querySelector('.currency').value = result.toFixed((3))
                } else {
                    alert('ONLY INTEGERS ARE ALLOWED')
                }

                return false
            }
        })
    }
})