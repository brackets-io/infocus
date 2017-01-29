___
# InFocus

![Dawn](https://github.com/a-bakos/infocus/blob/master/icons/dawn-on.png)
![Garden](https://github.com/a-bakos/infocus/blob/master/icons/garden-on.png)
![Summer night](https://github.com/a-bakos/infocus/blob/master/icons/night-on.png)
![Frog pond](https://github.com/a-bakos/infocus/blob/master/icons/frog-pond-on.png)
![Wind](https://github.com/a-bakos/infocus/blob/master/icons/wind-on.png)
![Fire](https://github.com/a-bakos/infocus/blob/master/icons/fire-on.png)
![Water](https://github.com/a-bakos/infocus/blob/master/icons/water-on.png)
![Snow](https://github.com/a-bakos/infocus/blob/master/icons/snow-on.png)
![City](https://github.com/a-bakos/infocus/blob/master/icons/city-on.png)
![Cafe](https://github.com/a-bakos/infocus/blob/master/icons/cafe-on.png)

##### [Brackets](http://brackets.io/) extension to help you focus while coding

_Inspired by [Noisli](https://www.noisli.com/) and [Relax](http://brunobord.github.io/relax/)_

##### Current version: v0.9.8

---
## About the project

First of all, I love [Noisli](https://www.noisli.com/) because it works
brilliantly for me. Although I never used all of its features, such as the text
editor or even some of its sounds. I'd always leave it on playing in the
background while doing some work. When it comes to portability, it has
limitations, though, and I also don't like to rely on the browser nor the
internet connection in this matter.

Then there is [Relax](http://brunobord.github.io/relax/), a great alternative
to Noisli, which I discovered not long before I started to implement InFocus,
that offers the option of being portable, but again, I don't do actual work
inside it.

So here's my minimalistic distillation of a similar tool in the form of an
extension for my [favourite editor](http://brackets.io/). It lives where the work happens, therefore,
can be controlled conveniently. That also means you can use it on the go, or
basically anywhere.

I've included ten different sounds in it, which I call channels. Namely:
**dawn**, **garden**, **summer night**, **frog pond**, **wind**, **fire**,
**water**/**river**, **snow** + **light rain**, **cityscape** and **cafe**.

Certainly, for the best experience, I would suggest using headphones,
especially for those delicate sounds such as the _snowfall_ (which is one of my
favourites by the way).

## Screenshot

![InFocus](https://github.com/a-bakos/infocus/blob/master/infocus-screenshot-main.png)

## Install

Currently, the installation requires **two** steps. The first is the regular
procedure, same with most of the extensions. The second step requires a small
manual action. Below, I explain what and **why**.

**1.** Go to the `Extension Manager`. Find `InFocus` and click `Install`.

**2.** Then [download the soundpack from here](https://github.com/a-bakos/infocus-sounds/archive/master.zip),
unzip it and copy the actual `OGG` files into the extension's `sounds` folder
_(and please leave the filenames as they are)_.

To view this location you can use Brackets's `Help` >> `Show Extensions Folder`
menu item, or manually navigate to it, and find `abakos.infocus`:

+ **Windows:** `C:\Users\<user>\AppData\Roaming\Brackets\extensions\user`

+ **Mac:** `~/Library/Application Support/Brackets/extensions/user`

+ **Linux:** `~/.config/brackets/extensions/user`

(Reload Brackets.)

#### Why?

Because of the extension registry's upload limit.

When uploading an extension to the registry, they only allow that to be 5MB.
Since InFocus operates with sounds, this extension is **significantly** larger
in size than most of the extensions. We are talking approximately **42MB**
altogether here.

The sounds could have been loaded over the internet, but the key here is to
have InFocus completely independent from the internet.

Therefore I needed to find an alternative solution for distributing the
sounds. So, when you download the extension you will find that only one, the
first _(dawn)_ sound is available.

Also, I could have made the installation fully manual, so there would be need
for just one copy step, but then the extension wouldn't have been visible in
the registry.

I found the present solution to be a viable middle path.

_If you know of a better solution for this scenario, please let me know._

## Usage

Use the keyboard shortcut `CTRL` + `ALT` + `.` _(period)_ to toggle the panel.
Or go to: `Navigate` >> `InFocus`.

Click on the icon of the desired sound, and it will start playing.
You can play any number of sounds at once.

![InFocus](https://github.com/a-bakos/infocus/blob/master/infocus-screenshot-channels.png)

Use the slider or the mute button to control the overall volume.

![InFocus](https://github.com/a-bakos/infocus/blob/master/infocus-screenshot-mute.png)

## Resources

#### Used sounds:
All the sounds come from [freesound.org](https://www.freesound.org), see the
sources and the licences linked below. Also, all of the sounds have been
slightly edited by me, e.g. they have been cut, made loopable, compressed and
re-titled for the extension.

As for the quality, I find the following compression just enough for the
purpose: _44.1kHz 24bit STEREO VBR OGG_.

The following sounds are the amazing field recordings of **Tim Kahn** aka [**Corsica_S**](https://www.freesound.org/people/Corsica_S/):

_(License: [CC-BY](https://creativecommons.org/licenses/by/3.0/))_

[**Botanical garden**](https://www.freesound.org/people/Corsica_S/sounds/265975/),
[**Fire**](https://www.freesound.org/people/Corsica_S/sounds/253770/),
[**Cityscape**](https://www.freesound.org/people/Corsica_S/sounds/324885/),
[**Dawn**](https://www.freesound.org/people/Corsica_S/sounds/184797/),
[**Wind**](https://www.freesound.org/people/Corsica_S/sounds/329560/),
[**Snow**](https://www.freesound.org/people/Corsica_S/sounds/334193/),
[**River**](https://www.freesound.org/people/Corsica_S/sounds/361312/),
[**Frog pond**](https://www.freesound.org/people/Corsica_S/sounds/153031/)

**Summer night**
(this sound is a mix I made of two recordings):

 - [[1]](https://www.freesound.org/people/Corsica_S/sounds/184268/) _[CC-BY](https://creativecommons.org/licenses/by/3.0/)_ by [Corsica_S](https://www.freesound.org/people/Corsica_S/) 
 - [[2]](https://www.freesound.org/people/johnaudiotech/sounds/347049/) _CC0_ by johnaudiotech
 
[**Cafe**](https://www.freesound.org/people/FlorenceArt/sounds/90179/) _CC0_ by FlorenceArt

#### Icons: 

The used and modified icons originally come from [Flaticons.net](http://flaticons.net).

---

##### License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

#### Happy coding!

[abakos](http://abakos.info) | 2017 Plymouth UK
