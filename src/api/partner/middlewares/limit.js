'use strict';

/**
 * `limit` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const contentType = 'partner'; // Укажите тип контента, для которого нужно ограничить количество элементов
    const maxItems = 2; // Установите максимальное количество элементов

    // Проверка создания нового контента
    if (ctx.request.method === 'POST' && ctx.request.url.includes(`/api/${contentType}s`)) {
      const count = await strapi.entityService.count(`api::${contentType}.${contentType}`);
      if (count >= maxItems) {
        return ctx.throw(403, `You can only create up to ${maxItems} ${contentType}s.`);
      }
    }

    // Проверка удаления контента
    if (ctx.request.method === 'DELETE' && ctx.request.url.includes(`/api/${contentType}s`)) {
      const userRole = ctx.state.user.role.name; // Получаем роль пользователя
      // Ограничение удаления только для администраторов
      if (userRole === 'Super Admin') {
        return ctx.throw(403, 'Administrators are not allowed to delete items.');
      }
    }

    await next();
  };
};
