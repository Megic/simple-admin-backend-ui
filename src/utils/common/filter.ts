import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

/**
 * 获取年龄
 * @param type 
 * @returns 
 */
export function sex(type: number) {
  const data ={
    1:'男',
    2: '女'
  }
  return data[type];
}

export function age(value: string) {
  if (!value) {
    return '未知'
    }
    // 输入生日
    const birthDate = dayjs(value, 'YYYY-MM-DD')

    // 计算年龄
    const ageInYears = dayjs().diff(birthDate, 'year')

    // 如果年龄小于1岁，则计算出周数和天数
    let ageInWeeks = 0
    let ageInDays = 0
    if (ageInYears < 1) {
      const ageInDaysTotal = dayjs().diff(birthDate, 'day')
      ageInWeeks = Math.floor(ageInDaysTotal / 7)
      ageInDays = ageInDaysTotal % 7
    }

    // 输出结果
    if (ageInYears < 1) {
      return `${ageInWeeks}周${ageInDays}天`
    } else {
      return`${ageInYears}岁`
    }
}