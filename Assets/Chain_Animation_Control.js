#pragma strict

var left : KeyCode;
var right : KeyCode;

var anim : Animator;

function Start () {
	anim = GetComponent.<Animator>();
}

function Update () {
	if(Input.GetKey(right))
	{
		anim.SetBool("chainBool",true);
	}
	else if(Input.GetKey(left))
	{
		anim.SetBool("chainBool",true);
	}
	else
	{
		anim.SetBool("chainBool",false);
	}
}