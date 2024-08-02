function updateTable() {
    const patientCount = parseFloat(document.getElementById('patientCount').value);
    const resources = [
        { id: 'patientsTotal', countPerPatientId: 'patientsCount', avgSizeId: 'patientsAvgSize', updateCountId: 'patientsUpdateCount' },
        { id: 'encountersTotal', countPerPatientId: 'encountersCount', avgSizeId: 'encountersAvgSize', updateCountId: 'encountersUpdateCount' },
        { id: 'coverageTotal', countPerPatientId: 'coverageCount', avgSizeId: 'coverageAvgSize', updateCountId: 'coverageUpdateCount' },
        { id: 'diagnosticReportTotal', countPerPatientId: 'diagnosticReportCount', avgSizeId: 'diagnosticReportAvgSize', updateCountId: 'diagnosticReportUpdateCount' },
        { id: 'observationTotal', countPerPatientId: 'observationCount', avgSizeId: 'observationAvgSize', updateCountId: 'observationUpdateCount' },
        { id: 'medicationRequestTotal', countPerPatientId: 'medicationRequestCount', avgSizeId: 'medicationRequestAvgSize', updateCountId: 'medicationRequestUpdateCount' },
        { id: 'mediaTotal', countPerPatientId: 'mediaCount', avgSizeId: 'mediaAvgSize', updateCountId: 'mediaUpdateCount' },
        { id: 'otherTotal', countPerPatientId: 'otherCount', avgSizeId: 'otherAvgSize', updateCountId: 'otherUpdateCount' }
    ];

    let totalStorage = 0;

    resources.forEach(resource => {
        const countPerPatient = parseFloat(document.getElementById(resource.countPerPatientId).innerText);
        const avgSizePerResource = parseFloat(document.getElementById(resource.avgSizeId).innerText);
        const updateCount = parseFloat(document.getElementById(resource.updateCountId).innerText);

        const totalResourceCount = patientCount * countPerPatient * updateCount;
        const totalResourceSize = totalResourceCount * avgSizePerResource / (1024 * 1024); // Convert KB to GB

        document.getElementById(resource.id).innerText = totalResourceSize.toFixed(2);
        totalStorage += totalResourceSize;
    });

    document.getElementById('totalCount').innerText = patientCount;
    document.getElementById('totalStorage').innerText = totalStorage.toFixed(2);
}

// Initialize table on load
window.onload = updateTable;
