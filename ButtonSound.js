# Button Sound 
//This coding is making sound buttons.

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Button))]

public class ButtonSound : MonoBehaviour
{
    public AudioClip hover;
    public AudioClip click;
    public AudioSource source;

    //sound on hover
    public void Onhover()
    {
        source.PlayOneShot(hover);
    }
    
    //make a click sound
    public void Onclick()
    {
        source.PlayOneShot(click);
    }
}
