document.addEventListener('DOMContentLoaded', function () {
    var tourSelect = document.getElementById('tourSelect');
    var amountInput = document.getElementById('amountInput');

    tourSelect.addEventListener('change', function () {
        // You can make an AJAX request to the server to get the amount dynamically
        // For simplicity, I'll just set some static values based on the selected tour
        var selectedTour = tourSelect.value;
        var amount;

        switch (selectedTour) {
            case 'coimbatore':
                amount = 10000;
                break;
				 case 'chennai':
                amount = 20000;
                break;
				 case 'kodaikanal':
                amount =19000;
                break;
				 case 'tirunelveli':
                amount = 5000;
                break;
				 case 'tenkasi':
                amount = 9000;
                break;
				 case 'thanjavor':
                amount = 17000;
                break;
				 case 'kanyakumari':
                amount = 10000;
                break;
            case 'madurai':
                amount = 15000;
                break;
            // Add more cases as needed
            default:
                amount = 0;
        }

        amountInput.value = amount;
    });
});
