export const statehelper = function (state) {
  switch (state) {
    case "0":
      return "Отправлено ⚠️"
    case "1":
      return "Запланировано 🕓"
    case "2":
      return "Выполняется 🕓"
    case "3":
      return "Выполнено ✅"
    case "4":
      return "Отменено ❌"
    default:
      return "Новый"
  }
}
