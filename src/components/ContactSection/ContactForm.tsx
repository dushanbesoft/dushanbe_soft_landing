"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactSection.module.css";

export default function ContactForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    direction: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          direction: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setError(data.error || t("contact.form.errorSend", "Failed to send message"));
      }
    } catch {
      setError(t("contact.form.errorOccurred", "An error occurred. Please try again later."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {t("contact.form.nameLabel", "Имя")}
          </label>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder={t("contact.form.namePlaceholder", "Ваше имя")}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {t("contact.form.emailLabel", "Email")}
          </label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder={t(
              "contact.form.emailPlaceholder",
              "email@company.com",
            )}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {t("contact.form.phoneLabel", "Телефон")}
          </label>
          <input
            type="tel"
            name="phone"
            className={styles.input}
            placeholder={t(
              "contact.form.phonePlaceholder",
              "+_ (___) ___ __ __",
            )}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {t("contact.form.directionLabel", "Направление")}
          </label>
          <div className={styles.selectWrapper}>
            <select
              name="direction"
              className={styles.select}
              value={formData.direction}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                {t("contact.form.directionOptions.opt1", "Выберите услугу")}
              </option>
              <option value="Разработка ПО">
                {t("contact.form.directionOptions.opt2", "Разработка ПО")}
              </option>
              <option value="Веб-разработка">
                {t("contact.form.directionOptions.opt3", "Веб-разработка")}
              </option>
              <option value="Аутсорсинг IT">
                {t("contact.form.directionOptions.opt4", "Аутсорсинг IT")}
              </option>
            </select>
            <svg
              className={styles.selectArrow}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93514 0.41361L4.73921 4.903C4.71102 4.93323 4.67504 4.95766 4.63401 4.97447C4.59297 4.99127 4.54794 5 4.50232 5C4.45669 5 4.41166 4.99127 4.37063 4.97447C4.32959 4.95766 4.29362 4.93323 4.26542 4.903L0.0660816 0.41361C-0.0907119 0.247017 0.0490387 1.31863e-08 0.301272 1.31863e-08L8.69654 1.31863e-08C8.75347 -1.53927e-05 8.80926 0.0134689 8.85752 0.0389111C8.90579 0.0643533 8.94458 0.100727 8.96947 0.143873C8.99436 0.187019 9.00434 0.235195 8.99827 0.282895C8.9922 0.330595 8.97032 0.375893 8.93514 0.41361Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          {t("contact.form.messageLabel", "Сообщение")}
        </label>
        <textarea
          name="message"
          className={styles.textarea}
          placeholder={t(
            "contact.form.messagePlaceholder",
            "Расскажите о вашем проекте: задача, масштаб, сроки…",
          )}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {error && (
        <div style={{ color: "#ff4d4f", marginBottom: "10px" }}>{error}</div>
      )}
      {success && (
        <div style={{ color: "#52c41a", marginBottom: "10px" }}>
          {t("contact.form.successMessage", "Заявка успешно отправлена!")}
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={loading}
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        <span>
          {loading
            ? t("contact.form.submitting", "Отправка...")
            : t("contact.form.submitBtn", "Отправить заявку")}
        </span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50716 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z"
            fill="#F1F7FF"
          />
        </svg>
      </button>
    </form>
  );
}
