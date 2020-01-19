const initialState = {
    showWelcome: true,
    showTrafficLightAndInfo: false,
    showScanning: false,
    showInput: false,
    singleproduct:{ id: 0, EAN: [], product:"kein Produkt gefunden", trafficColorIndex: 3, massValue: "-", calorificValue: "- KJ / - Kcal", carbohydrates: "-", fat: "-", protein: "-", salt: "-"}

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SCAN': 
        return {scanning: action.value.products}

        case 'LOAD_PRODUCT':

        let newProduct = action.value[0];
        console.log(newProduct)
        return {showWelcome:false,
                showTrafficLightAndInfo: true,
                showScanning: false,
                showInput: false,
                singleproduct: {...newProduct}
        }

        case 'INPUT':
        return {input: action.value}

        case 'PO':
        return {trafficLight: action.value}

        default: 
            return state;
    }
}

export default reducer;