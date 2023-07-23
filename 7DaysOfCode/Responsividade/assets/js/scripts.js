// Dados das consultas de hoje
  const todayAppointments = [
    {
      startTime: "14:00",
      endTime: "15:00",
      patient: "Luciana Dias",
      type: "Consulta remota",
      image: "./assets/images/luciana.png",
      icon: "fa-video"
    },
    {
      startTime: "16:00",
      endTime: "17:00",
      patient: "Larissa Santana",
      type: "Consulta no local",
      image: "./assets/images/larissa.png",
      icon: "fa-house"
    },
    {
      startTime: "17:20",
      endTime: "18:00",
      patient: "Marcos Correia",
      type: "Consulta remota",
      image: "./assets/images/marcos.png",
      icon: "fa-video"
    }
  ];

  // Dados das consultas de amanhã
  const tomorrowAppointments = [
    {
      startTime: "18:00",
      endTime: "19:00",
      patient: "Clara Lemos",
      type: "Consulta no local",
      image: "./assets/images/clara.png",
      icon: "fa-house"
    },
    {
      startTime: "14:00",
      endTime: "15:00",
      patient: "Luciana Dias",
      type: "Consulta remota",
      image: "./assets/images/luciana.png",
      icon: "fa-video"
    },
    {
      startTime: "17:20",
      endTime: "18:00",
      patient: "Marcos Correia",
      type: "Consulta remota",
      image: "./assets/images/marcos.png",
      icon: "fa-video"
    },
    {
      startTime: "16:00",
      endTime: "17:00",
      patient: "Larissa Santana",
      type: "Consulta no local",
      image: "./assets/images/larissa.png",
      icon: "fa-house"
    }
  ];

  // Função para criar a lista de consultas
  function createAppointmentsList(appointments, containerId) {
    const container = document.getElementById(containerId);

    appointments.forEach((appointment) => {
      const appointmentElement = document.createElement("div");
      appointmentElement.classList.add("appointment");

      const appointmentDetails = document.createElement("div");
      appointmentDetails.classList.add("appointment-details");
      appointmentElement.appendChild(appointmentDetails);

      const detailsElement = document.createElement("div");
      detailsElement.classList.add("details");
      appointmentDetails.appendChild(detailsElement);

      const imageElement = document.createElement("div");
      imageElement.classList.add("image");
      detailsElement.appendChild(imageElement);

      const patientImage = document.createElement("img");
      patientImage.classList.add("patient-photo");
      patientImage.src = appointment.image;
      patientImage.alt = appointment.patient;
      imageElement.appendChild(patientImage);

      const detailsContent = document.createElement("div");
      detailsContent.classList.add("details-content");
      detailsElement.appendChild(detailsContent);

      const patientName = document.createElement("p");
      patientName.classList.add("patientName");
      patientName.textContent = appointment.patient;
      detailsContent.appendChild(patientName);

      const appointmentType = document.createElement("div");
      appointmentType.classList.add("appointmentType");
      detailsContent.appendChild(appointmentType);

      const typeIcon = document.createElement("i");
      typeIcon.classList.add("fa-solid", appointment.icon);
      appointmentType.appendChild(typeIcon);

      const appointmentTypeText = document.createElement("p");
      appointmentTypeText.classList.add("appointmentTypeText");
      appointmentTypeText.textContent = appointment.type;
      appointmentType.appendChild(appointmentTypeText);

      const msgElement = document.createElement("div");
      msgElement.classList.add("message");
      appointmentDetails.appendChild(msgElement);

      const msgIcon = document.createElement("i");
      msgIcon.classList.add("fa-regular", "fa-message");
      msgElement.appendChild(msgIcon);

      const appointmentTime = document.createElement("div");
      appointmentTime.classList.add("appointmentTime");
      appointmentElement.appendChild(appointmentTime);

      const appointmentTimeText = document.createElement("div");
      appointmentTimeText.classList.add("appointmentTimeText");
      appointmentTimeText.textContent = `${appointment.startTime} - ${appointment.endTime} (${getDuration(
        appointment.startTime,
        appointment.endTime
      )})`;
      appointmentTime.appendChild(appointmentTimeText);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("buttonContainer");
      appointmentTime.appendChild(buttonContainer);

      if (appointment.type === "Consulta no local") {
        const buttonLocal = document.createElement("button");
        buttonLocal.classList.add("buttonLocal");
        buttonLocal.textContent = "Ver endereço";
        buttonContainer.appendChild(buttonLocal);
      } else if (appointment.type === "Consulta remota") {
        const buttonRemoteVideo = document.createElement("button");
        buttonRemoteVideo.classList.add("buttonRemoteVideo");
        buttonRemoteVideo.textContent = "Ligar por vídeo";
        buttonContainer.appendChild(buttonRemoteVideo);

        const buttonRemoteAudio = document.createElement("button");
        buttonRemoteAudio.classList.add("buttonRemoteAudio");
        buttonRemoteAudio.textContent = "Ligar por áudio";
        buttonContainer.appendChild(buttonRemoteAudio);
      }

      container.appendChild(appointmentElement);
    });
  }

  // Chamar a função para criar as listas de consultas de hoje e amanhã
  createAppointmentsList(todayAppointments, "today-appointments");
  createAppointmentsList(tomorrowAppointments, "tomorrow-appointments");

  // Função para calcular a duração da consulta
  function getDuration(startTime, endTime) {
    const start = new Date(`2000/01/01 ${startTime}`);
    const end = new Date(`2000/01/01 ${endTime}`);
    const durationInMinutes = Math.floor((end - start) / 60000);

    if (durationInMinutes < 60) {
      // Duração inferior a 1 hora
      return `${durationInMinutes} minutos`;
    } else {
      const hours = Math.floor(durationInMinutes / 60);
      const minutes = durationInMinutes % 60;

      if (minutes === 0) {
        // Duração exata de horas
        return `${hours} hora${hours > 1 ? "s" : ""}`;
      } else {
        // Duração com horas e minutos
        return `(${hours} hora${hours > 1 ? "s" : ""} ${minutes} minuto${minutes > 1 ? "s" : ""})`;
      }
    }
  }

