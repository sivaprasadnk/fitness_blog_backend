const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable if it exists, otherwise use 3000
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {

    var body = {
        'data': 'Hi helo',
    }
    res.send(body);
});


app.get('/recent-posts', (req, res) => {
    var data = [
        {
            'id': '1',
            'date': Date(2025, 0, 1),
            'title': "Sleep Smarter: Unlock Peak Health and Performance",
            'subTitle': "Sleep is more than just rest; it's a vital component of your physical and mental well-being. Quality sleep improves recovery, sharpens focus, and balances your energy for the day ahead. Without it, even the best fitness routines can fall short.",
            'content': `
            Sleep is a cornerstone of a healthy lifestyle. Here's why it matters:

1. Supports Recovery: During sleep, your body repairs muscles and tissues, helping you recover from workouts and daily stress.

2. Boosts Mental Health: Adequate sleep improves mood, reduces stress, and enhances cognitive functions like focus and decision-making.

3. Regulates Appetite: Poor sleep can disrupt hunger hormones, leading to overeating and unhealthy food choices.

4. Enhances Performance: Quality sleep boosts energy, stamina, and overall performance in physical activities.

Tips to Improve Sleep Quality

1. Stick to a Consistent Schedule: Going to bed and waking up at the same time every day helps regulate your body's internal clock.

2. Create a Relaxing Bedtime Routine: Engage in calming activities such as reading, meditating, or taking a warm bath before bed.

3. Limit Screen Time: Avoid screens at least an hour before bedtime, as blue light can interfere with your sleep cycle.

4. Optimize Your Sleep Environment: Ensure your bedroom is cool, dark, and quiet for a better sleep experience.

5. Watch Your Diet: Avoid heavy meals, caffeine, and alcohol close to bedtime.
            `,
            'imagePath': "",
            'isActive': "Y",
        },
        // {
        //     'id': '3',
        //     'date': "",
        //     'title': "",
        //     'subTitle': "",
        //     'content': "",
        //     'imagePath': "",
        //     'isActive': "Y",
        // },
    ];
    var body = {
        'data': data
    }
    res.send(body);
});


app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});
