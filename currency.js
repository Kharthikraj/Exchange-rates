document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form1').onsubmit = function(e){
        e.preventDefault()
        let cur = document.querySelector('.selector_base').value
        let to_convert = document.querySelector('.selector_cur').value

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_59DlTWCSUrFj08dJRyYavW8CzvYy4h3M3bqyIdcg&currencies=${to_convert}&base_currency=${cur}`)
        .then(response => response.json())
        .then(data => {
            let one = document.querySelector('.base_currency').value

            if (Number.isInteger(parseInt(one))) {
                let result = one * data.data[to_convert]
                document.querySelector('.currency').value = result.toFixed((3))
            } else {
                alert('ONLY INTEGERS ARE ALLOWED')
            }
        })
    }
})
