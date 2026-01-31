function openInvite() {
  const envelope = document.getElementById("envelope-screen");
  const invite = document.getElementById("invite-screen");

  envelope.classList.remove("active");
  invite.classList.add("active");
}
