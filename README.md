GRO
---

GRO is a dynamic musical composition for web browsers. 

Five audio loops of differing lengths are stacked together to create an effect similar to [Phasing](https://en.wikipedia.org/wiki/Phase_music) or [Euclidean Rhythm](https://en.wikipedia.org/wiki/Euclidean_rhythm).

Initial parameters (such as the key and the tempo) change slightly with every page load, and the volume of each loop continuously fluctuates.

The result is a pleasant drone and a simple melodic phrase that subtly evolves over time. 

The piece should play on any recent device with any major web browser except IE. Chrome is recommended.


Process & Credits​
------------------

Pipe organ samples provided by the [Leeds Town Hall Organ](http://www.leedsminster.org/Music/Organ/2/), as captured by [Samplephonics](https://www.samplephonics.com/products/free/sampler-instruments/the-leeds-town-hall-organ) and [Dr. Simon Lindley](http://simonlindley.org.uk/).

Loops created with [Ableton Live 9](https://makingmusic.ableton.com/).

Musical arrangement created with JavaScript and the [Web Audio API](http://teropa.info/blog/2016/08/19/what-is-the-web-audio-api.html). 

JavaScript implementation of the [Schroeder-based "Freeverb"](https://valhalladsp.com/2009/05/30/schroeder-reverbs-the-forgotten-algorithm/) taken from [TONE.js](https://github.com/Tonejs/Tone.js).

[Stereo Panner Polyfill](https://github.com/mohayonao/stereo-panner-node) created by [@mohayonao](https://github.com/mohayonao).

CSS Normalization pulled from [Tachyons.io](http://tachyons.io).

Inspiration & Advice provided by [@tambien](https://github.com/tambien), [@jakealbaugh](https://github.com/jakealbaugh), [@wizgrav](https://github.com/wizgrav), and [@wam](https://github.com/wam).

Troubleshooting
---------------

If you experience glitches or playback issues, make sure that you aren't simultaneously running other dynamic web pages or applications, and make sure your browser is up to date. 

If you still experience trouble, please file an issue here on Github.

License
-------

MIT