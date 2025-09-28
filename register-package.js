// register-package.js

import { doc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth, db } from './firebase-config.js';

const packageForm = document.getElementById('package-registration-form');
const authMessage = document.getElementById('auth-message');

onAuthStateChanged(auth, (user) => {
    if (user) {
        authMessage.style.display = 'none';
        packageForm.style.display = 'block';

        packageForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const packageData = {
                userId: user.uid,
                partner: packageForm.partner.value,
                weight: packageForm.weight.value,
                description: packageForm.description.value,
                sender: {
                    name: packageForm.senderName.value,
                    country: packageForm.senderCountry.value,
                    phone: packageForm.senderPhone.value
                },
                receiver: {
                    name: packageForm.receiverName.value,
                    city: packageForm.receiverCity.value,
                    phone: packageForm.receiverPhone.value
                },
                pickupRequested: packageForm.pickupRequest.checked,
                pickupAddress: packageForm.pickupRequest.checked ? packageForm.pickupAddress.value : null,
                status: 'En attente',
                createdAt: serverTimestamp()
            };

            try {
                await addDoc(collection(db, "packages"), packageData);
                alert("Colis enregistré avec succès !");
                packageForm.reset();
            } catch (error) {
                alert("Erreur lors de l'enregistrement du colis: " + error.message);
            }
        });
    } else {
        authMessage.style.display = 'block';
        packageForm.style.display = 'none';
    }
});

const pickupCheckbox = document.getElementById('pickupRequest');
const pickupAddressSection = document.getElementById('pickup-address-section');

pickupCheckbox.addEventListener('change', () => {
    if (pickupCheckbox.checked) {
        pickupAddressSection.classList.remove('hidden');
    } else {
        pickupAddressSection.classList.add('hidden');
    }
});