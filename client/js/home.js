document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('http://localhost:3000/api/workers');
        const result = await response.json();

        if (result.success && result.data.length > 0) {
            updateHeroCards(result.data);
            updateStats();
        }
    } catch (error) {
        console.error('Error fetching workers:', error);
    }
});

function updateHeroCards(workers) {
    const cards = [
        document.querySelector('.card-1'),
        document.querySelector('.card-2'),
        document.querySelector('.card-3')
    ];

    // Take top 3 workers
    // Start with the second worker for the first card (visually top left?)
    // Actually, let's just take top 3.
    const topWorkers = workers.slice(0, 3);

    topWorkers.forEach((worker, index) => {
        if (cards[index]) {
            updateCardContent(cards[index], worker);
        }
    });
}

function updateCardContent(card, worker) {
    let colorClass = 'primary';
    let iconClass = 'wrench';
    const serviceLower = worker.service.toLowerCase();

    if (serviceLower.includes('electric')) { colorClass = 'warning'; iconClass = 'lightning'; }
    else if (serviceLower.includes('clean')) { colorClass = 'success'; iconClass = 'broom'; }
    else if (serviceLower.includes('paint')) { colorClass = 'danger'; iconClass = 'paint-brush'; }
    else if (serviceLower.includes('carpen')) { colorClass = 'info'; iconClass = 'hammer'; }
    else if (serviceLower.includes('hvac')) { colorClass = 'primary'; iconClass = 'fan'; }

    // Generate inner HTML
    // We keep the structure exactly as in index.html to maintain styling
    const html = `
    <div class="d-flex align-items-center gap-3">
        <div class="position-relative">
            <div class="bg-${colorClass} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                style="width: 50px; height: 50px">
                <i class="ph-fill ph-user fs-4 text-${colorClass}"></i>
            </div>
            ${worker.verified ? `
            <span class="position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 18px; height: 18px">
                <i class="ph-fill ph-seal-check text-white" style="font-size: 10px"></i>
            </span>` : ''}
        </div>
        <div>
            <h6 class="mb-0 fw-semibold">${worker.name}</h6>
            <small class="text-muted text-capitalize"><i class="ph ph-${iconClass} text-${colorClass} me-1"></i>
                ${worker.service}</small>
        </div>
        <div class="ms-auto d-flex flex-column align-items-end gap-1">
            <span class="badge bg-warning bg-opacity-10 text-warning px-2 py-1">
                <i class="ph-fill ph-star me-1"></i>${worker.rating.toFixed(1)}
            </span>
            <button class="btn btn-sm btn-${colorClass} rounded-pill px-3 text-white book-now-btn py-1" 
                style="font-size: 0.7rem;"
                data-worker-id="${worker.id}" 
                data-worker-name="${worker.name}" 
                data-service="${worker.service}" 
                data-hourly-rate="${worker.hourlyRate || 0}">Book</button>
        </div>
    </div>`;

    card.innerHTML = html;
}

function updateStats() {
    // Optional: Animate stats or fetch real counts if we had an endpoint
    // For now we just improved the visuals, stats are hardcoded in HTML
    // We could make them count up if we wanted
}
