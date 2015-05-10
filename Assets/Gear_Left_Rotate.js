#pragma strict

var left : KeyCode;
var right : KeyCode;

function Start () {

}

function Update () {
	if(Input.GetKey(right))
	{
		transform.Rotate(Vector3.back);
	}
	else if(Input.GetKey(left))
	{
		transform.Rotate(Vector3.forward);
	}
	else
	{
	
	}
}