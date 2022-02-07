function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/A_KcyAhSq/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}