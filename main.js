function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/A_KcyAhSq/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var tiger = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected dog - ' + dog + ', Detected Cat -  ' + cat + ', Detected cow - ' + cow + ', Detected Tiger - ' + tiger;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('animal_image');

        if (results[0].label == "Bark of dog") {
            img.src = 'Dog.gif';
            dog = dog + 1;
        } else if (results[0].label == "Meow of cat") {
            img.src = 'cat.gif';
            cat = cat + 1;
        } else if (results[0].label == "Moo of cow") {
            img.src = 'cow.gif';
            cow = cow + 1;
        } else if (results[0].label == "Roar of tiger") {
            img.src = 'Tiger.gif';
            tiger = tiger + 1;
        }
        else {
            img.src = 'listen.gif';
        }
    }
}