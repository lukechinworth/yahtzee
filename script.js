new Vue({
    el: "#app",
    data: {
        rollText: "test",
        diceText: "test"
    },
    computed: {
        dice: function () {
            return rollText.split(',')
        }
    }
})
